import { MdDelete } from 'react-icons/md';
import './styles.css';
import { useSelector } from 'react-redux';
import reserve from '../../store/modules/reserve/reducer';

export default function Reservas() {
    const reserves = useSelector((state: any) => state.reserve);
    return (
        <div>
            <h1 className="title">Você solicitou {reserves.lenght} reservas</h1>
            {reserves.map((reserve: any) => (
                <div className="reservas" key={reserve.id}>
                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <span>Quantidade: 2</span>
                    <button type="button" onClick={() => {}}>
                        <MdDelete size={20} color="#191919" />
                    </button>
                </div>
            ))}

            <footer>
                <button type="button">Solicitar Reservas</button>
            </footer>
        </div>
    );
}
