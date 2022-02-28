var FirstName = "Luis";
var FinalName = "Henrique";
// var age = prompt("Digite sua idade: ");//coment
//console.log(FirstName+" "+FinalName+ "; Idade: "+ age);

function entrar() {
  var area = document.getElementById("area");
  var text = prompt("Type your name: ");

  if (text == "" || text == null) {
    alert("Type your name, please");
    area.innerHTML = "Welcome (your name)";
  } else {
    area.innerHTML = "Welcome " + text;
  }
}
