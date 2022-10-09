import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeReserve,
    updateAmountReserve,
    decrementAmountReserve,
} from '../../store/modules/reserve/actions';

export default function Reservas() {
    const reserves = useSelector((state: any) => state.reserve);
    const dispatch = useDispatch();

    function handleRemove(id: number) {
        dispatch(removeReserve(id));
    }

    function decrementAmount(trip: any) {
        dispatch(decrementAmountReserve(trip.id, trip.amount - 1));
    }

    function incrementAmount(trip: any) {
        dispatch(updateAmountReserve(trip.id, trip.amount + 1));
    }

    return (
        <div>
            <h1 className="title">Você solicitou {reserves.lenght} reservas</h1>
            {reserves.map((reserve: any) => (
                <div className="reservas" key={reserve.id}>
                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <div id="amount">
                        <button
                            type="button"
                            onClick={() => decrementAmount(reserve)}
                        >
                            <MdRemoveCircle size={25} color="#191919" />
                        </button>
                        <input type="text" readOnly value={reserve.amount} />
                        <button
                            type="button"
                            onClick={() => incrementAmount(reserve)}
                        >
                            <MdAddCircle size={25} color="#191919" />
                        </button>
                    </div>
                    <button
                        onClick={() => {
                            handleRemove(reserve.id);
                        }}
                    >
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
