import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from "./components/Index";
import ListaProductos from "./components/ListaProductos";
import AgregarProducto from "./AgregarProducto";
import Navegacion from "./components/Common/Navegacion";
import Footer from "./components/Common/Footer";

function App() {

  return (
    <>
      <Router>
        <Navegacion logo="https://www.pngkey.com/png/full/22-225874_coffee-logo-png-vector-cafe.png" />
        <Switch>
          <Route exact path="/">
            <Index/>
          </Route>
          <Route exact path="/productos">
            <ListaProductos/>
          </Route>
          <Route exact path="/productos/nuevo">
            <AgregarProducto/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
