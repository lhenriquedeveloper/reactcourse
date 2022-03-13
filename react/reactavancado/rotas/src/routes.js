import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>

    return null;
}

export default Routes; 