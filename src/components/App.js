// React
import React from 'react';
//Components
import Header from './Header';
import Home from './Home';
import AjouterEvenement from './AjouterEvenement';
// Redux
import { loadEventsFetching } from '../redux/actions/events.actions';
import { connect } from 'react-redux';
// socket
import { BrowserRouter as Route } from 'react-router-dom';

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
  ajouterEvenement = evenement => {};

  ajouterParticipants = evenement_id => {};

  unRegister = evenement_id => {};

  /**
   * Render
   */
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
          evenements={this.props.events}
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

const mapStateToProps = state => {
  return state.eventsReducer;
};

export default connect(
  mapStateToProps,
  { loadEventsFetching }
)(App);
