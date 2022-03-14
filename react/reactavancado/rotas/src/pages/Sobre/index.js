import { Link } from "react-router-dom";
export default function Sobre() {
  return (
    <div>
      <h1>Sobre o curso Reactjs...</h1>
      <br />
      <Link to="/">Home</Link> <br />
      <Link to="/contato"> Contato</Link>
    </div>
  );
}
