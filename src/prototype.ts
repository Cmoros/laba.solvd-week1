interface String {
  plus: (str: string) => string;
  minus: (str: string) => string;
  divide: (str: string) => string;
  multiple: (str: string) => string;
}

String.prototype.plus = function (str: string): string {
  let carry = 0;
  let resArr: number[] = [];
  const len1 = this.length;
  const len2 = str.length;

  const len = Math.max(len1, len2);
  for (let i = 0; i < len; i++) {
    const a = this[len1 - 1 - i] ?? 0;
    const b = str[len2 - 1 - i] ?? 0;
    const c = +a + +b + carry;
    resArr.push(c % 10);
    carry = Math.floor(c / 10);
  }

  if (carry) {
    resArr.push(carry);
  }

  return resArr.reverse().join("");
};

String.prototype.minus = function (str: string): string {
  if (
    this.length < str.length ||
    (this.length === str.length && this[0] < str[0])
  ) {
    return "negative";
  }
  let carry = 0;
  let resArr: number[] = [];
  const len1 = this.length;
  const len2 = str.length;

  for (let i = 0; i < len1; i++) {
    const a = this[len1 - 1 - i];
    const b = str[len2 - 1 - i] ?? 0;
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
};

// Simple Division (too slow for big numbers)
// String.prototype.divide = function (this: string, str: string): string {
//   if (str === "1") return this;
//   let quotient = 0;
//   let remainder = this;
//   while (remainder && remainder !== "negative") {
//     remainder = remainder.minus(str);
//     quotient++;
//   }
//   return `${quotient}`;
// };

String.prototype.divide = function (this: string, str: string): string {
  let quotient = [];
  let current = this.slice(0, str.length);
  let diff = current.minus(str);
  let start = str.length;
  if (diff === "negative") {
    current += this[str.length];
    start++;
    diff = current.minus(str);
  }

  for (let i = start; i < this.length + 1; i++) {
    let quotientDigit = 0;
    while (diff !== "negative") {
      current = diff;
      diff = diff.minus(str);
      quotientDigit++;
    }
    quotient.push(quotientDigit);

    if (i === this.length) break;

    current += this[i];
    diff = current.minus(str);
    while (diff === "negative") {
      quotient.push(0);
      i++;
      if (i === this.length) {
        break;
      }
      current += this[i];
      diff = current.minus(str);
    }
  }

  return quotient.join("");
};

// Simple multiplication (too low with big numbers)
// String.prototype.multiple = function (this: string, str: string): string {
//   if (str === "1") return this;
//   let result = this;

//   str = str.minus("1");
//   while (str) {
//     result = result.plus(this);
//     str = str.minus("1");
//   }
//   return result;
// };

String.prototype.multiple = function (this: string, str: string): string {
  // Initialize result array with the appropriate number of zeroes
  const result: string[] = Array(this.length);
  // Multiply each digit of num1 with each digit of num2
  for (let i = this.length - 1; i >= 0; i--) {
    let carry = 0;
    const current = Array(str.length);
    for (let j = str.length - 1; j >= 0; j--) {
      const aux = +this[i] * +str[j];
      current.push((aux + carry) % 10);
      carry = Math.floor((aux + carry) / 10);
    }
    if (carry) current.push(carry);
    result[i] = current.reverse().join("") + "0".repeat(this.length - 1 - i);
  }

  return result.reduce((acc, cur) => acc.plus(cur));
};
