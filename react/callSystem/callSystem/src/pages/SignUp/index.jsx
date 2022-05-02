import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { AuthContext } from '../../contexts/auth';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();

        if (name !== '' && email !== '' && password !== '') {
            signUp(email, password, name);
            setEmail("");
            setName("");
            setPassword("");
        }
        else {
            alert("Preencha todos os dados");
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Sistema Logo" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Registre-se</h1>
                    <input type="text" placeholder="Seu Nome" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type="text" placeholder="email@email.com.br" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder="***************" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit">{loadingAuth ? 'Cadastrando...' : 'Cadastrar'}</button>
                </form>

                <Link to="/">Já tem uma conta? Entre aqui</Link>
            </div>
        </div>
    )
}

export default SignUp;
