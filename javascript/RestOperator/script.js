function cadastro(usuarios, ...novosUsuarios) {
  let totalUsers = [...usuarios, ...novosUsuarios];

  return console.log(totalUsers);
}

let usuarios = ["Matheus", "Joao"];

let novosUsuarios = cadastro(usuarios, "Henrique", "Lucas");
