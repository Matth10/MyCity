import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
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
        <ul>{listNav}</ul>
      </div>
    )
  }
}

export default Navbar
