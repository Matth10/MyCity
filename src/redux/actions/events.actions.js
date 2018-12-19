/**
 * Action Types
 */
//Event for the middleware
export const ADD_EVENT_FETCHING = 'ADD_EVENT_FETCHING';
export const UPDATE_EVENT_FETCHING = 'UPDATE_EVENT_FETCHING';
export const LOAD_EVENTS_FETCHING = 'LOAD_EVENTS_FETCHING';
//Sucess Actions
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';

/**
 *  action creators
 */
// For the middleware
export function addEventFetching(event) {
  return { type: ADD_EVENT_FETCHING, event };
}

export function updateEventFetching(event) {
  return { type: UPDATE_EVENT_FETCHING, event };
}

export function loadEventsFetching() {
  return { type: LOAD_EVENTS_FETCHING };
}

// Success Actions
export function addEventSuccess(event) {
  return { type: ADD_EVENT_SUCCESS, event };
}

export function updateEventSuccess(event) {
  return { type: UPDATE_EVENT_SUCCESS, event };
}

export function loadEventsSuccess(events) {
  return { type: LOAD_EVENTS_SUCCESS, events };
}
