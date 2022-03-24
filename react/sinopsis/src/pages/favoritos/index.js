import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/favoritosStyle.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
  }

  return (
    <div id="meus-filmes">
      <h1> Meus Filmes: </h1>

      {filmes.length === 0 && (
        <span className="nothing">
          <SentimentDissatisfiedIcon sx={{ fontSize: 20 }} />
          Você não possui nenhum filme salvo
          <SentimentDissatisfiedIcon sx={{ fontSize: 20 }} />
        </span>
      )}

      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.nome}</span>
              <div>
                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                <button>
                  <DeleteIcon
                    sx={{ fontSize: 27 }}
                    color="primary"
                    className="delete-icon"
                    onClick={() => {
                      handleDelete(filme.id);
                    }}
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
