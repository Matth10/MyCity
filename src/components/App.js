// React
import React from 'react';
//Components
import Header from './Header';
import Home from './Home';
import AjouterEvenement from './AjouterEvenement';
// Redux
import {
  loadEventsFetching,
  addEventFetching,
  updateParticipantsFetching,
} from '../redux/actions/events.actions';
import { connect } from 'react-redux';
// socket
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.match.params.pseudo,
    };
  }

  /**
   * Lifecycle
   */
  componentDidMount() {
    this.props.loadEventsFetching();
  }

  /**
   * Events Functions
   */
  ajouterEvenement = event => {
    this.props.addEventFetching(event);
  };

  ajouterParticipants = evenement_id => {
    let participants = this.props.events[evenement_id].participants;
    // Add the new participant
    participants.push(this.state.user);
    // Dispatch the updateEventFetching action
    this.props.updateParticipantsFetching(evenement_id, participants);
  };

  unRegister = evenement_id => {
    let participants = this.props.events[evenement_id].participants;
    // Delete the participant
    let index = participants.indexOf(this.state.user);
    if (index !== -1) {
      participants.splice(index, 1);
      console.log(participants);
    }
    // Dispatch the updateEventFetching action
    this.props.updateParticipantsFetching(evenement_id, participants);
  };

  /**
   * Render
   */
  render() {
    const path = {
      home: `/app/${this.props.match.params.pseudo}/home`,
      ajouterEvenement: `/app/${this.props.match.params.pseudo}/creerevenement`,
    };

    return (
      <div className="box">
        <Header pseudo={this.props.match.params.pseudo} />
        <Route
          path={path.home}
          render={props => {
            return (
              <Home
                evenements={this.props.events}
                ajouterParticipants={this.ajouterParticipants}
                unRegister={this.unRegister}
                user={this.state.user}
              />
            );
          }}
        />
        <Route
          path={path.ajouterEvenement}
          render={props => {
            return (
              <AjouterEvenement
                pseudo={this.props.match.params.pseudo}
                ajouterEvenement={this.ajouterEvenement}
              />
            );
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.eventsReducer;
};

export default connect(
  mapStateToProps,
  {
    loadEventsFetching,
    addEventFetching,
    updateParticipantsFetching,
  }
)(App);
