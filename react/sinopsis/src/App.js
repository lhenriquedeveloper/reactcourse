import Routes from "./routes";
import "./css/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
