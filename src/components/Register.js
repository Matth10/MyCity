import React from 'react';
import app from '../base';

class Register extends React.Component {
  goToApp = async event => {
    event.preventDefault();
    const newUser = {
      lastname: this.FirstNameInput.value,
      firstname: this.LastNameInput.value,
      pseudo: this.pseudoInput.value,
      password: this.passwordInput.value,
      email: this.emailInput.value,
    };
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(newUser['email'], newUser['password']);
      this.props.history.push(`/app/${this.pseudoInput.value}/home`);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={e => this.goToApp(e)}>
          <h1 className="form-signin-heading">Sign In</h1>

          <label htmlFor="inputText" className="sr-only">
            FirstName
          </label>
          <input
            type="text"
            placeholder="FirstName"
            className="form-control"
            required
            ref={input => {
              this.FirstNameInput = input;
            }}
          />

          <label htmlFor="inputText" className="sr-only">
            LastName
          </label>
          <input
            type="text"
            placeholder="LastName"
            className="form-control"
            required
            ref={input => {
              this.LastNameInput = input;
            }}
          />

          <label htmlFor="inputText" className="sr-only">
            UserName
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

          <label htmlFor="inputEmail" className="sr-only">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            required
            ref={input => {
              this.emailInput = input;
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
        </form>
      </div>
    );
  }
}

export default Register;
