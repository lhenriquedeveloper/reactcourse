import { Link } from 'react-router-dom';
import Logo from '../../assets/redux.svg';
import './styles.css';

function Header() {
    return (
        <>
            <header className="container">
                <Link to="/">
                    <img className="logo" src={Logo} alt="Logo do Redux" />
                </Link>

                <Link className="reserva" to="/reservas">
                    <div>
                        <strong>Minhas Reservas:</strong>
                        <span>3 Reservas</span>
                    </div>
                </Link>
            </header>
        </>
    );
}

export default Header;
