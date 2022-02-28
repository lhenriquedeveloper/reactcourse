import React from "react";

// Stateless Component e Props
/*const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo {props.nome}</h2>
      <h3>Tenho {props.idade} Anos</h3>
    </div>
  );
};*/

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} age={props.age} />
      <hr />
    </div>
  );
};

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.age}</h3>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Lucas" cargo="Programador" age="29" />
      <Equipe nome="Luis" cargo="UX designer" age="19" />
    </div>
  );
}

export default App;
