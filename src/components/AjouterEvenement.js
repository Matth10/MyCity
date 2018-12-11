import React from 'react';

class AjouterEvenement extends React.Component {
  creerEvenement = event => {
    event.preventDefault();
    const evenement = {
      nom: this.nom.value,
      image: this.image.value,
      informations: this.informations.value,
      description: this.description.value,
      nbpersonnes: this.nbpersonnes.value,
      organisateur: this.props.pseudo,
      date: this.date.value,
    };
    console.log(evenement);
    this.props.ajouterEvenement(evenement);
    this.evenementForm.reset();
  };

  render() {
    return (
      <div className="card">
        <form
          className="admin-form ajouter-evenement"
          ref={input => (this.evenementForm = input)}
          onSubmit={e => this.creerEvenement(e)}
        >
          <input
            ref={input => (this.nom = input)}
            type="text"
            placeholder="Nom de l'événement"
          />

          <input
            ref={input => (this.image = input)}
            type="text"
            placeholder="Adresse de l'image"
          />

          <input ref={input => (this.date = input)} type="date" />

          <input ref={input => (this.nbpersonnes = input)} type="number" />

          <textarea
            ref={input => (this.informations = input)}
            rows="3"
            placeholder="Liste des informations(date,heure...) séparés par une virgule"
          />

          <textarea
            ref={input => (this.description = input)}
            rows="15"
            placeholder="Description de l'événement"
          />

          <button type="submit">+ Ajouter un événement</button>
        </form>
      </div>
    );
  }
}

export default AjouterEvenement;
