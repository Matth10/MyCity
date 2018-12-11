import React from 'react';
import { Link } from 'react-router-dom';
import app from '../base';

class Connexion extends React.Component {
  state = {
    message: {
      type: 'success',
      msg: null,
    },
    user: {
      pseudo: '',
      password: '',
    },
  };

  goToApp = async event => {
    event.preventDefault();
    let userCurrent = this.state.user;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(
          this.pseudoInput.value,
          this.passwordInput.value
        )
        .then(() => {
          this.props.setUserAuth(true);
          this.props.history.push(`/app/${this.pseudoInput.value}/home`);
        });
    } catch (error) {
      alert(error);
    }
  };
  //  {this.state.message.type === 'success' ? <p>{this.state.message.message}</p> }

  render() {
    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={e => this.goToApp(e)}>
          <h1 className="form-signin-heading">Move Your City</h1>
          <label htmlFor="inputText" className="sr-only">
            Username
          </label>
          <input
            type="text"
            placeholder="Pseudo"
            className="form-control"
            required
            ref={input => {
              this.pseudoInput = input;
            }}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            required
            ref={input => {
              this.passwordInput = input;
            }}
          />
          <button className="btnLogin" type="submit">
            CONNEXION
          </button>
          <p className="register">
            Not registered yet ? <Link to="/register/">Click here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Connexion;
