// React
import React from 'react'
import { Link } from 'react-router-dom'
// Firebase init
import app from '../base'
// Redux
import { connect } from 'react-redux'
import { userIsLogin, userIsLogOut } from '../redux/actions/user.actions'

class Connexion extends React.Component {
  constructor(props) {
    super(props)

    app.auth().onAuthStateChanged(authUser => {
      console.log(authUser)
      if (authUser) {
        app
          .auth()
          .currentUser.getIdToken()
          .then(token => {
            this.props.userIsLogin(token)
            // Route the client to the home page
            this.props.history.push(`/app/${authUser.email}/home`)
          })
      } else {
        this.props.userIsLogOut()
      }
    })
  }
  /**
   * Login Function
   */
  goToApp = async event => {
    event.preventDefault()
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(
          this.pseudoInput.value,
          this.passwordInput.value
        )
        .then(() => {
          app
            .auth()
            .currentUser.getIdToken()
            .then(token => {
              // distpatch store action
              this.props.userIsLogin(token)
              // Route the client to the home page
              this.props.history.push(`/app/${this.pseudoInput.value}/home`)
            })
        })
    } catch (error) {
      alert(error)
    }
  }

  /**
   * Render
   */
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
              this.pseudoInput = input
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
              this.passwordInput = input
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
    )
  }
}

export default connect(
  null,
  { userIsLogin, userIsLogOut }
)(Connexion)
