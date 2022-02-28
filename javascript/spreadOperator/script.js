function cadastroPessoa(info) {
  let novosDados = {
    ...info,
    cargo: "Auxiliar de T.I",
    status: 1,
    cod: 123456789,
  };
  return novosDados;
}

console.log(
  cadastroPessoa({ nome: "Luis", sobrenome: "Henrique", anoInicio: 2022 })
);
