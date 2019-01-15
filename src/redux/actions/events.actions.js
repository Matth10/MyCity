/**
 * Action Types
 */
//Event for the middleware
export const ADD_EVENT_FETCHING = 'ADD_EVENT_FETCHING';
export const UPDATE_PARTICIPANTS_FETCHING = 'UPDATE_PARTICIPANTS_FETCHING';
export const LOAD_EVENTS_FETCHING = 'LOAD_EVENTS_FETCHING';
//Sucess Actions
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const UPDATE_PARTICIPANTS_SUCCESS = 'UPDATE_PARTICIPANTS_SUCCESS';
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';

/**
 *  action creators
 */
// For the middleware
export function addEventFetching(event) {
  return { type: ADD_EVENT_FETCHING, event };
}

export function updateParticipantsFetching(event_id, participants) {
  return {
    type: UPDATE_PARTICIPANTS_FETCHING,
    payload: { event_id: event_id, participants: participants },
  };
}

export function loadEventsFetching() {
  return { type: LOAD_EVENTS_FETCHING };
}

// Success Actions
export function addEventSuccess(event) {
  return { type: ADD_EVENT_SUCCESS, event };
}

export function updateParticipantsSuccess(event) {
  return { type: UPDATE_PARTICIPANTS_SUCCESS, event };
}

export function loadEventsSuccess(events) {
  return { type: LOAD_EVENTS_SUCCESS, events };
}
