import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Navbar from './Components/Layout/Navbar'
import Landing from './Components/Layout/Landing'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import Alert from './Components/Layout/Alert'
import Dashboard from './Components/dashboard/Dashboard'
import PrivateRoute from './Components/routing/PrivateRoute'
//Redux
import { Provider } from 'react-redux'
import store from './store'
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import './App.css';

if ( localStorage.token ) {
  setAuthToken( localStorage.token );
}

const App = () => {
  useEffect( () => { store.dispatch( loadUser() ); }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="container">
              <Alert />
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </section>
        </Fragment>
      </Router>
    </Provider>
  )}
export default App;
