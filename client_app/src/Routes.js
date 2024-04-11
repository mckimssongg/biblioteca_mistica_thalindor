
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import OtraPagina from './OtraPagina'; // Importa la página a la que deseas redirigir

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/otra-pagina" component={OtraPagina} />
      </Switch>
    </Router>
  );
}

export default Routes;
