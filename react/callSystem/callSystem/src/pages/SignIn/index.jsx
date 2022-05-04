import { useState, useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import "../../styles/css/signin.css";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";



function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (email !== '' && password !== '') {
            signIn(email, password);
            setEmail("");
            setPassword("");
            history.push("/dashboard");
        }
        else {
            toast.error('Preencha todos os campos!', {
                position: "top-left",
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
            });
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Sistema Logo" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input type="text" placeholder="email@email.com.br" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder="***************" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
                </form>

                <Link to="/register">Criar uma Conta</Link>
            </div>
        </div>
    )
}

export default SignIn;
