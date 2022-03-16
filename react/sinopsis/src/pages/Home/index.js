import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "../../css/homeStyle.css";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to="/">Veja a sinopse e o trailer</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
