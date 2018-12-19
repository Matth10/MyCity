// React
import React from 'react';
// Components
import App from './App';
import Connexion from './Connexion';
import NotFound from './NotFound';
import Register from './Register';
// Rooter
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

class App_Auth extends React.Component {
  render() {
    // create PrivateRoute component to protect the route
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.isAuth === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <Connexion {...props} />;
            }}
          />
          <Route
            path="/register/"
            render={props => {
              return <Register {...props} />;
            }}
          />
          <PrivateRoute path="/app/:pseudo/" component={App} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return state['userReducer'];
};

export default connect(mapStateToProps)(App_Auth);
