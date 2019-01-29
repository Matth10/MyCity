import React from 'react'
import { Link } from 'react-router-dom'
// Firebase init
import app from '../base'
// Redux
import { connect } from 'react-redux'
import { userIsLogOut } from '../redux/actions/user.actions'

class Navbar extends React.Component {
  logout = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        this.props.userIsLogOut()
      })
      .catch(e => console.error(e))
  }
  render() {
    const navTab = [
      { nom: 'Accueil', path: `/app/${this.props.pseudo}/home` },
      { nom: 'Créer', path: `/app/${this.props.pseudo}/creerevenement` },
      { nom: 'MonCompte', path: `/app/${this.props.pseudo}/moncompte` },
      { nom: 'Contact', path: `/app/${this.props.pseudo}/contact` }
    ]

    const listNav = navTab.map((e, id) => (
      <li key={id}>
        <Link to={e.path}>{e.nom}</Link>
      </li>
    ))

    return (
      <div className="cssmenu">
        <ul>
          {listNav}
          <li>
            {' '}
            <a onClick={this.logout}>Logout </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(
  null,
  { userIsLogOut }
)(Navbar)
