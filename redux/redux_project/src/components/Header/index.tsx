import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../assets/redux.svg';
import './styles.css';

function Header() {
    const reserveSize = useSelector((state: any) => state.reserve.length);
    return (
        <>
            <header className="container">
                <Link to="/">
                    <img className="logo" src={Logo} alt="Logo do Redux" />
                </Link>

                <Link className="reserva" to="/reservas">
                    <div>
                        <strong>Minhas Reservas:</strong>
                        <span>{reserveSize} Reservas</span>
                    </div>
                </Link>
            </header>
        </>
    );
}

export default Header;
