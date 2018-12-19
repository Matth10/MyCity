/**
 * Imports
 */
import * as fromEventActions from '../actions/events.actions';

/**
 * Set the initialeState
 */
const initialeState = {
  events: {},
  isFetching: false,
};

/**
 * Reducer that dispatch event actions
 */
export const eventsReducer = (state = initialeState, action) => {
  let state_events;
  switch (action.type) {
    case fromEventActions.ADD_EVENT_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case fromEventActions.ADD_EVENT_SUCCESS:
      state_events = { ...state.events };
      state_events[action.event._id] = action.event;
      return {
        ...state,
        events: state_events,
        isFetching: false,
      };
    case fromEventActions.UPDATE_EVENT_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case fromEventActions.UPDATE_EVENT_SUCCESS:
      state_events = { ...state.events };
      state_events[action.event._id] = action.event;
      return {
        ...state,
        events: state_events,
        isFetching: false,
      };
    case fromEventActions.LOAD_EVENTS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case fromEventActions.LOAD_EVENTS_SUCCESS:
      let eventsLoaded = {};
      action.events.forEach(event => {
        eventsLoaded[event._id] = event;
      });
      return {
        ...state,
        events: eventsLoaded,
        isFetching: false,
      };
    default:
      return state;
  }
};
