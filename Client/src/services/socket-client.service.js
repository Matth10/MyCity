/**
 * Imports
 */
import { store } from '../redux/store/app-store';
import * as fromEventsActions from '../redux/actions/events.actions';
const io = require('socket.io-client');
/**
 * Dependencies
 */
const socket = io.connect('http://localhost:8080');

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
    console.log('socketservice ' + data);
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
