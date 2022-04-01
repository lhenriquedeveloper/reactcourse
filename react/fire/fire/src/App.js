import firebase from "./firebaseConnection";
import { useState } from "react";
import "./style.css";

export default function App() {
  //STATES:

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function newUser() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log("Dados cadastrados com sucesso: " + value);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("Senha muito fraca...");
        } else if (error.code === "auth/email-already-in-use") {
          alert("Esse email já existe");
        }
      });
  }

  async function logout() {
    await firebase.auth().signOut();
    console.log("Usuário deslogado");
  }

  return (
    <div>
      <h1> Trabalhando com Firebase </h1>
      <br />

      <h3>Cadastre seu usuário: </h3>
      <div className="container">
        <label>Email: </label>
        <input
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <label>Senha: </label>
        <input
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <br />
        <button onClick={newUser}>Cadastrar usuário</button>
        <button onClick={logout}>Deslogar</button>
      </div>
    </div>
  );
}
