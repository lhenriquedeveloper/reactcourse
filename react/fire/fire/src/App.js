import firebase from "./firebaseConnection";
import { useState } from "react";
import "./style.css";

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  async function handleAdd() {
    // Realizando inserção no firebase API com ID estático.
    // await firebase
    //   .firestore()
    //   .collection("posts")
    //   .doc("12345")
    //   .set({
    //     titulo: titulo,
    //     autor: autor,
    //   })
    //   .then(() => {
    //     console.log("Dados cadastrados com sucesso!");
    //   })
    //   .catch((error) => {
    //     console.log("Algo deu errado: " + error);
    //   });

    //Realizando inserção no Firebase API com ID aleatório
    await firebase
      .firestore()
      .collection("posts")
      .add({
        titulo: titulo,
        autor: autor,
      })
      .then(() => {
        console.log("Dados cadastrados com sucesso!");
      })
      .catch((error) => {
        console.log("Algo deu errado: " + error);
      });

    setAutor("");
    setTitulo("");
  }

  async function buscaPost() {
    await firebase
      .firestore()
      .collection("posts")
      .doc("123")
      .get()
      .then((snapshot) => {
        setTitulo(snapshot.data().titulo);
        setAutor(snapshot.data().autor);
      })
      .catch((error) => {
        console.log("Algo deu errado: " + error);
      });
  }

  return (
    <div>
      <h1> Trabalhando com Firebase</h1>
      <div className="container">
        <label>Titulo:</label>
        <textarea
          type="test"
          value={titulo}
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
        />
        <label>Autor: </label>
        <input
          type="text"
          value={autor}
          onChange={(e) => {
            setAutor(e.target.value);
          }}
        />
        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscaPost}>Buscar Post</button>
      </div>
    </div>
  );
}
