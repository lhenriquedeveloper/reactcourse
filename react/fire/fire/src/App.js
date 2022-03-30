import firebase from "./firebaseConnection";
import { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [idPost, setIdPost] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [posts, setPosts] = useState([]);

  //Fazendo atualização das listas em RealTime com useEffect
  useEffect(() => {
    async function loadPosts() {
      await firebase
        .firestore()
        .collection("posts")
        .onSnapshot((doc) => {
          let myPosts = [];

          doc.forEach((item) => {
            myPosts.push({
              id: item.id,
              titulo: item.data().titulo,
              autor: item.data().autor,
            });
          });
          setPosts(myPosts);
        });
    }
    loadPosts();
  }, []);

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
    // Realizando GET de document por ID
    // await firebase
    //   .firestore()
    //   .collection("posts")
    //   .doc("123")
    //   .get()
    //   .then((snapshot) => {
    //     setTitulo(snapshot.data().titulo);
    //     setAutor(snapshot.data().autor);
    //   })
    //   .catch((error) => {
    //     console.log("Algo deu errado: " + error);
    //   });

    //Realizando get de todos os posts
    await firebase
      .firestore()
      .collection("posts")
      .get()
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            autor: doc.data().autor,
            titulo: doc.data().titulo,
          });
        });
        setPosts(lista);
      })
      .catch(() => {
        console.log("Algo de errado não está certo");
      });
  }

  async function editarPost() {
    await firebase
      .firestore()
      .collection("posts")
      .doc(idPost)
      .update({
        titulo: titulo,
        autor: autor,
      })
      .then(() => {
        setIdPost("");
        setAutor("");
        setTitulo("");
        alert("Dados atualizados com sucesso");
      })
      .catch((error) => {
        console.log("Algo deu errado, veja" + error);
      });
  }

  return (
    <div>
      <h1> Trabalhando com Firebase </h1>
      <div className="container">
        <label>ID: </label>
        <input
          type="text"
          onChange={(e) => {
            setIdPost(e.target.value);
          }}
          value={idPost}
        />
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
        <button onClick={editarPost}>Editar Post</button> <br />
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <br />
                <span>ID: {post.id}</span>
                <br />
                <span>Titulo : {post.titulo}</span> <br />
                <span>Autor: {post.autor}</span> <br /> <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
