// React
import React from 'react';
//Components
import Header from './Header';

import Home from './Home';
import AjouterEvenement from './AjouterEvenement';

// socket
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { socket } from '../socket';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evenements: {},
      user: this.props.match.params.pseudo,
    };
    socket.on('onNewEventAdded', data => {
      const evenements = this.state.evenements;
      evenements[data._id] = data;
      this.setState({ evenements });
    });
    socket.on('onEventUpdated', data => {
      let evenements = { ...this.state.evenements };
      evenements[data._id] = data;
      this.setState({ evenements });
    });
  }

  componentWillMount() {
    this.chargerEvenements();
  }

  chargerEvenements = () => {
    let evenements = {};
    socket.emit('chargerEvenements');
    socket.on('chargerEvenementsSucceed', data => {
      const tabevenements = data;
      tabevenements.forEach(evenement => {
        evenements[evenement._id] = evenement;
      });
      this.setState({
        evenements: evenements,
      });
    });
  };

  ajouterEvenement = evenement => {
    socket.emit('AddEvent', evenement);
  };

  ajouterParticipants = evenement_id => {
    socket.emit('AddParticipant', {
      user: this.props.match.params.pseudo,
      event: evenement_id,
    });
  };

  unRegister = evenement_id => {
    socket.emit('RemoveParticipant', {
      user: this.props.match.params.pseudo,
      event: evenement_id,
    });
  };

  render() {
    const path = {
      home: `/app/${this.props.match.params.pseudo}/home`,
      ajouterEvenement: `/app/${this.props.match.params.pseudo}/creerevenement`,
    };

    const ajouterevenement = () => {
      return (
        <AjouterEvenement
          pseudo={this.props.match.params.pseudo}
          ajouterEvenement={this.ajouterEvenement}
        />
      );
    };

    const home = () => {
      return (
        <Home
          evenements={this.state.evenements}
          chargerEvenements={this.chargerEvenements}
          evenementsInscrits={this.state.evenementsInscrits}
          ajouterParticipants={this.ajouterParticipants}
          unRegister={this.unRegister}
          user={this.state.user}
        />
      );
    };

    return (
      <div className="box">
        <Header pseudo={this.props.match.params.pseudo} />
        <Route path={path.home} component={home} />
        <Route path={path.ajouterEvenement} component={ajouterevenement} />
      </div>
    );
  }
}

export default App;
