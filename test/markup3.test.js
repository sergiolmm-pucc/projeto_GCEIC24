const {
  calculoMarkUp,
  precoProdutoFinal: precoProdutoFinal,
} = require("../services/dev-ops-3-mark-up-services");

describe("Dev-ops-3-mark-up", () => {
  test("calculate mark up", () => {
    mk = calculoMarkUp(15, 12, 18);

    expect(mk).toBe(1.82);
  });

  test("calculate final product price", () => {
    mk = calculoMarkUp(15, 12, 18);
    fpp = precoProdutoFinal(10, mk);

    expect(fpp).toBe(18.2);
  });

  test("calculate mark up without df", () => {
    expect(() => {
      calculoMarkUp(undefined, 12, 18);
    }).toThrow("Todos os parâmetros devem ser fornecidos.");
  });
  test("calculate mark up without dv", () => {
    expect(() => {
      calculoMarkUp(15, undefined, 18);
    }).toThrow("Todos os parâmetros devem ser fornecidos.");
  });
  test("calculate mark up without ml", () => {
    expect(() => {
      calculoMarkUp(15, 12, undefined);
    }).toThrow("Todos os parâmetros devem ser fornecidos.");
  });
  test("calculate mark up if df is NAN", () => {
    expect(() => {
      calculoMarkUp("a", 12, 18);
    }).toThrow("Parâmetros invalidos");
  });
  test("calculate mark up if dl is NAN", () => {
    expect(() => {
      calculoMarkUp(15, "a", 18);
    }).toThrow("Parâmetros invalidos");
  });
  test("calculate mark up if ml is NAN", () => {
    expect(() => {
      calculoMarkUp(15, 12, "a");
    }).toThrow("Parâmetros invalidos");
  });
  test("calculate mark up if df < 0", () => {
    expect(() => {
      calculoMarkUp(-1, 12, 18);
    }).toThrow("Parâmetros invalidos");
  });
  test("calculate mark up if dl < 0", () => {
    expect(() => {
      calculoMarkUp(15, -1, 18);
    }).toThrow("Parâmetros invalidos");
  });
  test("calculate mark up if ml < 0", () => {
    expect(() => {
      calculoMarkUp(15, 12, -1);
    }).toThrow("Parâmetros invalidos");
  });

  test("calculate calculate final product price without cp", () => {
    mk = calculoMarkUp(15, 12, 18);

    expect(() => {
      precoProdutoFinal(undefined, mk);
    }).toThrow("Todos os parâmetros devem ser fornecidos.");
  });

  test("calculate calculate final product price without mk", () => {
    expect(() => {
      precoProdutoFinal(10, undefined);
    }).toThrow("Todos os parâmetros devem ser fornecidos.");
  });
  test("calculate calculate final product price if cp is NAN", () => {
    mk = calculoMarkUp(15, 12, 18);
    expect(() => {
      precoProdutoFinal("a", mk);
    }).toThrow("Parâmetros invalidos");
  });
  test("calculate calculate final product price if mk is NAN", () => {
    expect(() => {
      precoProdutoFinal(10, "a");
    }).toThrow("Parâmetros invalidos");
  });
  test("calculate calculate final product price if cp<0", () => {
    mk = calculoMarkUp(15, 12, 18);
    expect(() => {
      precoProdutoFinal(-1, mk);
    }).toThrow("Parâmetros invalidos");
  });
  test("calculate calculate final product price if mk<0", () => {
    expect(() => {
      precoProdutoFinal(10, -1);
    }).toThrow("Parâmetros invalidos");
  });
});
