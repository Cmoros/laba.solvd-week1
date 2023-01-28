export function plus(x: string, y: string): string {
  let carry = 0;
  let resArr: number[] = [];
  const len1 = x.length;
  const len2 = y.length;

  const len = Math.max(len1, len2);
  for (let i = 0; i < len; i++) {
    const a = x[len1 - 1 - i] ?? 0;
    const b = y[len2 - 1 - i] ?? 0;
    const c = +a + +b + carry;
    resArr.push(c % 10);
    carry = Math.floor(c / 10);
  }

  if (carry) {
    resArr.push(carry);
  }

  return resArr.reverse().join("");
}

export function minus(x: string, y: string): string {
  if (x.length < y.length || (x.length === y.length && x[0] < y[0])) {
    return "negative";
  }
  let carry = 0;
  let resArr: number[] = [];
  const len1 = x.length;
  const len2 = y.length;

  for (let i = 0; i < len1; i++) {
    const a = x[len1 - 1 - i];
    const b = y[len2 - 1 - i] ?? 0;
    const dif = +a - +b - carry;
    resArr.push((10 + dif) % 10);
    carry = +(dif < 0);

    // Other "readable" way with if statement
    // if (dif < 0) {
    //   resArr.push(10 + dif);
    //   carry = 1;
    // } else {
    //   resArr.push(dif)
    //   carry = 0;
    // }
  }

  if (carry) return "negative";

  while (resArr[resArr.length - 1] === 0) {
    resArr.pop();
  }

  return resArr.reverse().join("");
}

// Simple Division (too slow for big numbers)
// export function divide(x: string, y: string): string {
//   if (y === "1") return x;
//   let quotient = 0;
//   let remainder = x;
//   while (remainder && remainder !== "negative") {
//     remainder = minus(remainder, y);
//     quotient++;
//   }
//   return `${quotient}`;
// }

export function divide(x: string, y: string): string {
  let quotient = [];
  let current = x.slice(0, y.length);
  let diff = minus(current, y);
  let start = y.length;
  if (diff === "negative") {
    current += x[y.length];
    start++;
    diff = minus(current, y);
  }

  for (let i = start; i < x.length + 1; i++) {
    let quotientDigit = 0;
    while (diff !== "negative") {
      current = diff;
      diff = minus(diff, y);
      quotientDigit++;
    }
    quotient.push(quotientDigit);

    if (i === x.length) break;

    current += x[i];
    diff = minus(current, y);
    while (diff === "negative") {
      quotient.push(0);
      i++;
      if (i === x.length) {
        break;
      }
      current += x[i];
      diff = minus(current, y);
    }
  }

  return quotient.join("");
}

// Simple Multiply (too slow for big numbers)
// export function multiple(x: string, y: string): string {
//   if (y === "1") return x;
//   let result = x;
//   y = minus(y, "1");
//   while (y) {
//     result = plus(result, x);
//     y = minus(y, "1");
//   }
//   return result;
// }

export function multiple(x: string, y: string): string {
  // Initialize result array with the appropriate number of zeroes
  const result: string[] = Array(x.length);
  // Multiply each digit of num1 with each digit of num2
  for (let i = x.length - 1; i >= 0; i--) {
    let carry = 0;
    const current = Array(y.length);
    for (let j = y.length - 1; j >= 0; j--) {
      const aux = +x[i] * +y[j];
      current.push((aux + carry) % 10);
      carry = Math.floor((aux + carry) / 10);
    }
    if (carry) current.push(carry);
    result[i] = current.reverse().join("") + "0".repeat(x.length - 1 - i);
  }

  return result.reduce((acc, cur) => plus(acc, cur));
}
