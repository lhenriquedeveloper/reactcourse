import { Route, Routes as Router } from 'react-router-dom';
import Home from './pages/Home';
import Reservas from './pages/Reservas';

function Routes() {
    return (
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="/reservas" element={<Reservas />} />
        </Router>
    );
}

export default Routes;
