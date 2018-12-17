// React
import React from 'react';
import { render } from 'react-dom';
// Components
import App from './components/App';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';
import Register from './components/Register';
// Rooter
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// CSS
import './index.css';
// Redux
import { store } from './redux/store/app-store';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthentificated: false,
    };
  }

  componentWillMount() {
    // Subscribe to the store to listen change on user authentification
    store.subscribe(() => {
      this.setState({ isAuthenticated: store.getState().isAuth });
    });
  }

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
