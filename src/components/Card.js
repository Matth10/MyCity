import React from 'react'

class Card extends React.Component {
  /**
   * Event sub/unsub functions
   */
  addPersonn = () => {
    if (
      this.props.details.participants.length === this.props.details.nbpersonnes
    ) {
      alert('Plus de place disponible')
    } else {
      this.props.ajouterParticipants(this.props.details._id)
    }
  }

  unRegister = event => {
    this.props.unRegister(this.props.details._id)
  }

  /**
   * Render
   */
  render() {
    const informations = this.props.details.informations
      .split(',')
      .map((item, key) => <li key={key}>{item}</li>)

    const description = this.props.details.description

    // Button Subcribe and Unsuscribe
    let button
    if (!this.props.isRegistered) {
      button = <button onClick={e => this.addPersonn(e)}>Participer</button>
    } else if (
      this.props.details.participants.indexOf(
        this.props.details.organisateur
      ) === -1
    ) {
      button = (
        <button className="unregister" onClick={e => this.unRegister(e)}>
          Se Désincrire
        </button>
      )
    } else {
      button = <button className="btn-admin">Organisateur</button>
    }

    return (
      <div className="card">
        <div className="date">{this.props.details.date}</div>
        <div className="image">
          <img src={this.props.details.image} alt="" />
        </div>

        <div className="evenement">
          <h2>{this.props.details.nom}</h2>

          <ul className="liste-informations">{informations}</ul>

          <p className="liste-description">{description}</p>
        </div>
        <div className="participer">{button}</div>
        <div className="nombre-places">
          {this.props.details.participants.length} /{' '}
          {this.props.details.nbpersonnes}
        </div>
      </div>
    )
  }
}

export default Card
