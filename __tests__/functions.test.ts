import { divide, minus, multiple, plus } from "../src/functions";

describe("plus", () => {
  it("can do a simple sum of 1 digit", () => {
    expect(plus("1", "2")).toBe("3");
    expect(plus("4", "4")).toBe("8");
    expect(plus("1", "8")).toBe("9");
  });

  it("can do sum of many digits", () => {
    expect(plus("10", "1")).toBe("11");
    expect(plus("1", "10")).toBe("11");
    expect(plus("10", "11")).toBe("21");
    expect(plus("11", "10")).toBe("21");
    expect(plus("15", "7")).toBe("22");
    expect(plus("7", "15")).toBe("22");
    expect(plus("128", "173")).toBe("301");
    expect(plus("173", "128")).toBe("301");
    expect(plus("999", "998")).toBe("1997");
    expect(plus("998", "999")).toBe("1997");
  });

  it("can handle large integers", () => {
    expect(plus("3262354234123412412432523", "1")).toBe(
      "3262354234123412412432524"
    );
    expect(plus("1", "3262354234123412412432523")).toBe(
      "3262354234123412412432524"
    );
    expect(plus("1", "99999999999999999999999999999")).toBe(
      "100000000000000000000000000000"
    );
    expect(plus("12345678901234567890", "98765432109876543210")).toBe(
      "111111111011111111100"
    );
    expect(plus("98765432109876543210", "12345678901234567890")).toBe(
      "111111111011111111100"
    );
    expect(
      plus(`${Number.MAX_SAFE_INTEGER}999`, `${Number.MAX_SAFE_INTEGER}9`)
    ).toBe("9097271247288401918");
  });
});

describe("minus", () => {
  it("can do a simple subtraction of 1 digit", () => {
    expect(minus("3", "2")).toBe("1");
    expect(minus("3", "3")).toBe("");
    expect(minus("6", "4")).toBe("2");
    expect(minus("8", "1")).toBe("7");
    expect(minus("8", "9")).toBe("negative");
  });

  it("can do subtraction of many digits", () => {
    expect(minus("10", "1")).toBe("9");
    expect(minus("11", "10")).toBe("1");
    expect(minus("15", "7")).toBe("8");
    expect(minus("173", "128")).toBe("45");
    expect(minus("999", "998")).toBe("1");
    expect(minus("998", "999")).toBe("negative");
    expect(minus("1000", "555")).toBe("445");
  });

  it("can handle large integers", () => {
    expect(minus("3262354234123412412432523", "1")).toBe(
      "3262354234123412412432522"
    );
    expect(minus("98765432109876543210", "12345678901234567890")).toBe(
      "86419753208641975320"
    );
    expect(
      minus(`${Number.MAX_SAFE_INTEGER}999`, `${Number.MAX_SAFE_INTEGER}9`)
    ).toBe("8917127262193582080");
  });
});

describe("multiple", () => {
  it("can do a simple multiplication of 1 digit", () => {
    expect(multiple("1", "1")).toBe("1");
    expect(multiple("3", "2")).toBe("6");
    expect(multiple("2", "4")).toBe("8");
    expect(multiple("8", "1")).toBe("8");
    expect(multiple("3", "3")).toBe("9");
  });

  it("can do multiplication of many digits", async () => {
    expect(multiple("10", "1")).toBe("10");
    expect(multiple("11", "11")).toBe("121");
    expect(multiple("15", "5")).toBe("75");
    expect(multiple("15", "3")).toBe("45");
    expect(multiple("250", "125")).toBe("31250");
    expect(multiple("1000", "50")).toBe("50000");
    expect(multiple("888", "111")).toBe("98568");
    expect(multiple("888", "111")).toBe("98568");
  }, 1000);

  it("can handle large integers", () => {
    expect(multiple("65536", "65536")).toBe("4294967296");
    expect(multiple(`729`, "531441")).toBe(`387420489`);
    expect(multiple(`729`, "531441")).toBe(`387420489`);
    expect(multiple(`${Number.MAX_SAFE_INTEGER}0`, `10`)).toBe(
      `${Number.MAX_SAFE_INTEGER}00`
    );
    expect(multiple(`10000000000000001`, `${Number.MAX_SAFE_INTEGER}`)).toBe(
      `${Number.MAX_SAFE_INTEGER}${Number.MAX_SAFE_INTEGER}`
    );
    expect(
      multiple(`${Number.MAX_SAFE_INTEGER}8`, `${Number.MAX_SAFE_INTEGER}9`)
    ).toBe(`8112963841460667899362922872176642`);
  });
});

describe("divide", () => {
  it("can do a simple division of 1 digit", () => {
    expect(divide("1", "1")).toBe("1");
    expect(divide("6", "2")).toBe("3");
    expect(divide("8", "4")).toBe("2");
    expect(divide("8", "1")).toBe("8");
    expect(divide("9", "3")).toBe("3");
    expect(divide("5", "5")).toBe("1");
  });

  it("can do division of many digits", async () => {
    expect(divide("10", "1")).toBe("10");
    expect(divide("11", "11")).toBe("1");
    expect(divide("15", "5")).toBe("3");
    expect(divide("15", "3")).toBe("5");
    expect(divide("250", "125")).toBe("2");
    expect(divide("1000", "50")).toBe("20");
    expect(divide("888", "111")).toBe("8");
    expect(divide("5555555", "1111111")).toBe("5");
  }, 1000);

  it("can handle large integers", () => {
    expect(divide("4294967296", "65536")).toBe("65536");
    expect(divide(`387420489`, "531441")).toBe(`729`);
    expect(
      divide(`${Number.MAX_SAFE_INTEGER}00`, `${Number.MAX_SAFE_INTEGER}0`)
    ).toBe("10");
    expect(
      divide(
        `${Number.MAX_SAFE_INTEGER}${Number.MAX_SAFE_INTEGER}`,
        `${Number.MAX_SAFE_INTEGER}`
      )
    ).toBe("10000000000000001");
    expect(
      divide(
        `8112963841460667899362922872176642`,
        `${Number.MAX_SAFE_INTEGER}9`
      )
    ).toBe(`${Number.MAX_SAFE_INTEGER}8`);
  });
});
