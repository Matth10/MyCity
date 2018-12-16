// React
import React from 'react';
//Components
import Header from './Header';
import Home from './Home';
import AjouterEvenement from './AjouterEvenement';
// Services
import * as socketService from '../services/socket-client.service';
// Redux
import store from '../redux/store/app-store';
// socket
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evenements: {},
      user: this.props.match.params.pseudo,
    };
  }
  componentWillMount() {
    // Subscrive to the store for change
    store.subscribe(() => {
      this.setState({
        evenements: store.getState(),
      });
    });
    socketService.loadEvents();
  }

  ajouterEvenement = evenement => {
    socketService.addEvent(evenement);
  };

  ajouterParticipants = evenement_id => {
    socketService.addParticipant(evenement_id, this.props.match.params.pseudo);
  };

  unRegister = evenement_id => {
    socketService.unsubscribeOfEvent(
      evenement_id,
      this.props.match.params.pseudo
    );
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
