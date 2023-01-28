import "../src/prototype";

describe("plus", () => {
  it("can do a simple sum of 1 digit", () => {
    expect("1".plus("2")).toBe("3");
    expect("4".plus("4")).toBe("8");
    expect("1".plus("8")).toBe("9");
  });

  it("can do sum of many digits", () => {
    expect("10".plus("1")).toBe("11");
    expect("1".plus("10")).toBe("11");
    expect("10".plus("11")).toBe("21");
    expect("11".plus("10")).toBe("21");
    expect("15".plus("7")).toBe("22");
    expect("7".plus("15")).toBe("22");
    expect("128".plus("173")).toBe("301");
    expect("173".plus("128")).toBe("301");
    expect("999".plus("998")).toBe("1997");
    expect("998".plus("999")).toBe("1997");
  });

  it("can handle large integers", () => {
    expect("3262354234123412412432523".plus("1")).toBe(
      "3262354234123412412432524"
    );
    expect("1".plus("3262354234123412412432523")).toBe(
      "3262354234123412412432524"
    );
    expect("1".plus("99999999999999999999999999999")).toBe(
      "100000000000000000000000000000"
    );
    expect("12345678901234567890".plus("98765432109876543210")).toBe(
      "111111111011111111100"
    );
    expect("98765432109876543210".plus("12345678901234567890")).toBe(
      "111111111011111111100"
    );
    expect(
      `${Number.MAX_SAFE_INTEGER}999`.plus(`${Number.MAX_SAFE_INTEGER}9`)
    ).toBe("9097271247288401918");
  });
});

describe("minus", () => {
  it("can do a simple subtraction of 1 digit", () => {
    expect("3".minus("2")).toBe("1");
    expect("3".minus("3")).toBe("");
    expect("6".minus("4")).toBe("2");
    expect("8".minus("1")).toBe("7");
    expect("8".minus("9")).toBe("negative");
  });

  it("can do subtraction of many digits", () => {
    expect("10".minus("1")).toBe("9");
    expect("11".minus("10")).toBe("1");
    expect("15".minus("7")).toBe("8");
    expect("173".minus("128")).toBe("45");
    expect("999".minus("998")).toBe("1");
    expect("998".minus("999")).toBe("negative");
    expect("1000".minus("555")).toBe("445");
  });

  it("can handle large integers", () => {
    expect("3262354234123412412432523".minus("1")).toBe(
      "3262354234123412412432522"
    );
    expect("98765432109876543210".minus("12345678901234567890")).toBe(
      "86419753208641975320"
    );
    expect(
      `${Number.MAX_SAFE_INTEGER}999`.minus(`${Number.MAX_SAFE_INTEGER}9`)
    ).toBe("8917127262193582080");
  });
});

describe("multiple", () => {
  it("can do a simple multiplication of 1 digit", () => {
    expect("1".multiple("1")).toBe("1");
    expect("3".multiple("2")).toBe("6");
    expect("2".multiple("4")).toBe("8");
    expect("8".multiple("1")).toBe("8");
    expect("3".multiple("3")).toBe("9");
  });

  it("can do multiplication of many digits", async () => {
    expect("10".multiple("1")).toBe("10");
    expect("11".multiple("11")).toBe("121");
    expect("15".multiple("5")).toBe("75");
    expect("15".multiple("3")).toBe("45");
    expect("250".multiple("125")).toBe("31250");
    expect("1000".multiple("50")).toBe("50000");
    expect("888".multiple("111")).toBe("98568");
  }, 1000);

  it("can handle large integers", () => {
    expect("65536".multiple("65536")).toBe("4294967296");
    expect(`729`.multiple("531441")).toBe(`387420489`);
    expect(`${Number.MAX_SAFE_INTEGER}0`.multiple(`10`)).toBe(
      `${Number.MAX_SAFE_INTEGER}00`
    );
    expect(`10000000000000001`.multiple(`${Number.MAX_SAFE_INTEGER}`)).toBe(
      `${Number.MAX_SAFE_INTEGER}${Number.MAX_SAFE_INTEGER}`
    );
    expect(
      `${Number.MAX_SAFE_INTEGER}8`.multiple(`${Number.MAX_SAFE_INTEGER}9`)
    ).toBe(`8112963841460667899362922872176642`);
  });
});

describe("divide", () => {
  it("can do a simple division of 1 digit", () => {
    expect("1".divide("1")).toBe("1");
    expect("6".divide("2")).toBe("3");
    expect("8".divide("4")).toBe("2");
    expect("8".divide("1")).toBe("8");
    expect("9".divide("3")).toBe("3");
    expect("5".divide("5")).toBe("1");
  });

  it("can do division of many digits", async () => {
    expect("10".divide("1")).toBe("10");
    expect("11".divide("11")).toBe("1");
    expect("15".divide("5")).toBe("3");
    expect("15".divide("3")).toBe("5");
    expect("250".divide("125")).toBe("2");
    expect("1000".divide("50")).toBe("20");
    expect("888".divide("111")).toBe("8");
    expect("5555555".divide("1111111")).toBe("5");
  }, 1000);

  it("can handle large integers", () => {
    expect("4294967296".divide("65536")).toBe("65536");
    expect(`387420489`.divide("531441")).toBe(`729`);
    expect(
      `${Number.MAX_SAFE_INTEGER}00`.divide(`${Number.MAX_SAFE_INTEGER}0`)
    ).toBe("10");
    expect(
      `${Number.MAX_SAFE_INTEGER}${Number.MAX_SAFE_INTEGER}`.divide(
        `${Number.MAX_SAFE_INTEGER}`
      )
    ).toBe("10000000000000001");
    expect(
      `8112963841460667899362922872176642`.divide(`${Number.MAX_SAFE_INTEGER}9`)
    ).toBe(`${Number.MAX_SAFE_INTEGER}8`);
  });
});
