import { Link } from "react-router-dom";
import "../../css/errorStyle.css";

export default function Erro() {
  return (
    <div>
      <h1 className="error-title">Essa página não existe!</h1>
      <Link className="errorback" to="/">
        Voltar para a home
      </Link>
    </div>
  );
}
