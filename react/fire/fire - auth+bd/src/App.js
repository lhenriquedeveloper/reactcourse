import firebase from "./firebaseConnection";
import { useState } from "react";
import "./style.css";

export default function App() {
  //Relacionado BD com Auth

  //STATES:

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");
  const [nome, setNome] = useState("");
  const [user, setUser] = useState({});

  async function newUser() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .set({
            nome: nome,
            cargo: cargo,
            status: true,
          })
          .then(() => {
            setNome("");
            setCargo("");
            setEmail("");
            setPassword("");
          });
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
    setUser({});
  }

  async function login() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .get()
          .then((snapshot) => {
            setUser({
              nome: snapshot.data().nome,
              cargo: snapshot.data().cargo,
              status: snapshot.data().status,
              email: value.user.email,
            });
            setEmail("");
            setPassword("");
          });
      })
      .catch((error) => {
        console.log("Erro ao realizar login: " + error);
      });
  }

  return (
    <div>
      <h1> Trabalhando com Firebase </h1>
      <br />
      <h3>Cadastre seu usuário: </h3>
      <div className="container">
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />{" "}
        <br />
        <label>Cargo: </label>
        <input
          type="text"
          placeholder="Digite seu cargo:"
          value={cargo}
          onChange={(e) => {
            setCargo(e.target.value);
          }}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <label>Senha: </label>
        <input
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <button onClick={login}>Realizar Login</button>
        <button onClick={newUser}>Cadastrar usuário</button>
        <button onClick={logout}>Deslogar</button>
      </div>
      <hr /> <br />
      {Object.keys(user).length > 0 && (
        <div>
          <strong>Bem vindo: </strong>
          {user.nome} <br />
          <strong>Cargo: </strong>
          {user.cargo} <br />
          <strong>Email: </strong>
          {user.email} <br />
          <strong>Status: </strong>
          {user.status ? "Ativo" : "Desativado"} <br />
        </div>
      )}
    </div>
  );
}
