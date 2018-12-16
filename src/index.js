// React
import React from 'react';
import { render } from 'react-dom';
// Components
import App from './components/App';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';
import Register from './components/Register';
import AjouterEvenement from './components/AjouterEvenement';
// Rooter
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
// CSS
import './index.css';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthentificated: false,
    };
  }

  // Set the user auth status
  setUserAuth = isAuth => {
    this.setState({ isAuthenticated: isAuth });
  };

  render() {
    // create PrivateRoute component to protect the route
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.state.isAuthenticated === true ? (
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
          {' '}
          {/* Wrapper dans une div pour que ça fonctionne */}
          <Route
            exact
            path="/"
            render={props => {
              return <Connexion {...props} setUserAuth={this.setUserAuth} />;
            }}
          />
          <Route
            path="/register/"
            render={props => {
              return <Register {...props} setUserAuth={this.setUserAuth} />;
            }}
          />
          <PrivateRoute path="/app/:pseudo/" component={App} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

render(<Root />, document.getElementById('root'));
