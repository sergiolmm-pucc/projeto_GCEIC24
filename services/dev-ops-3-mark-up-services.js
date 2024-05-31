function calculoMarkUp(df, dv, ml) {
    // console.log(df, dv, ml);
  if (df === undefined || dv === undefined || ml === undefined) {
    throw new Error("Todos os parâmetros devem ser fornecidos.");
  }
  if (isNaN(df) || isNaN(dv) || isNaN(ml)) {
    throw new Error("Parâmetros invalidos");
  }
  if (df < 0 || dv < 0 || ml < 0) {
    throw new Error("Parâmetros invalidos");
  }

  mk = 100 / (100 - (df + dv + ml));
  return Math.round(mk * 100) / 100;
}
function precoProdutoFinal(cp, mk) {
    // console.log(cp, mk);
  if (cp === undefined || mk === undefined) {
    throw new Error("Todos os parâmetros devem ser fornecidos.");
  }
  if (isNaN(cp) || isNaN(mk)) {
    throw new Error("Parâmetros invalidos");
  }
  if (cp < 0 || mk < 0) {
    throw new Error("Parâmetros invalidos");
  }
  cf = cp * mk;
  return Math.round(cf * 100) / 100;
}

module.exports = { calculoMarkUp, precoProdutoFinal };
