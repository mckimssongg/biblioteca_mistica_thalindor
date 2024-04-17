import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './sesion/login/login';
import Registration from './sesion/registration/registration'; 

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registro" component={Registration} />
      </Switch>
    </Router>
  );
}

export default Routes;
