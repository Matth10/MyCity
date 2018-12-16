/**
 * Imports
 */
import { store } from '../redux/store/app-store';
import * as fromEventsActions from '../redux/actions/events.actions';

/**
 * Dependencies
 */
const socket = require('socket.io-client')(':8080');

/**
 * Handle event reciever
 */
socket.on('onNewEventAdded', data => {
  store.dispatch(fromEventsActions.addEvent(data));
});

socket.on('onEventUpdated', data => {
  store.dispatch(fromEventsActions.updateEvent(data));
});

/**
 * Socket Service Functions
 */

export const loadEvents = () => {
  socket.emit('chargerEvenements');
  socket.on('chargerEvenementsSucceed', data => {
    store.dispatch(fromEventsActions.loadEvent(data));
  });
};

export const addEvent = events => {
  socket.emit('addEvent', events);
};

export const addParticipant = (eventId, user) => {
  socket.emit('addParticipant', {
    user: user,
    event: eventId,
  });
};

export const unsubscribeOfEvent = (eventId, user) => {
  socket.emit('RemoveParticipant', {
    user: user,
    event: eventId,
  });
};
