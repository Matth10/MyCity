/**
 * Imports
 */
import * as fromEventActions from '../actions/events.actions';

/**
 * Set the initialeState
 */
const initialeState = {
  events: {},
};

/**
 * Reducer that dispatch event actions
 */
export const eventsReducer = (state = initialeState, action) => {
  let state_events;
  switch (action.type) {
    case fromEventActions.ADD_EVENT:
      state_events = { ...state.events };
      state_events[action.event._id] = action.event;
      return {
        ...state,
        events: state_events,
      };
    case fromEventActions.UPDATE_EVENT:
      state_events = { ...state.events };
      state_events[action.event._id] = action.event;
      return {
        ...state,
        events: state_events,
      };
    case fromEventActions.LOAD_EVENTS:
      let eventsLoaded = {};
      action.events.forEach(event => {
        eventsLoaded[event._id] = event;
      });
      return {
        ...state,
        events: eventsLoaded,
      };
    default:
      return state;
  }
};
