import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Filme from "./pages/filme";
import Favoritos from "./pages/favoritos";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
      </Switch>
    </Router>
  );
};

export default Routes;
