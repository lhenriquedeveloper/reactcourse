import { useEffect, useState } from "react";
import "../../css/filmeInfoStyle.css";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Filme() {
  const { id } = useParams();
  const History = useHistory();

  //STATES
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      //TENTOU ACESSO COM ID QUE NÃO EXISTE, ENCAMINHADO PARA HOME.
      if (response.data.lenght === 0) {
        History.replaceState("/");
        return;
      }

      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();
  }, [History, id]);

  function salvaFilme() {
    const minhaLista = localStorage.getItem("filmes");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.error("Esse filme já está salvo!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className="filme-loading">
        <h1>Carregando seu filme...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse:</h3>
      <p>{filme.sinopse}</p>

      <div className="botoes">
        <button onClick={salvaFilme}> Salvar </button>
        <button>
          <a
            target="blank"
            href={`https://www.youtube.com/results?search_query= ${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
