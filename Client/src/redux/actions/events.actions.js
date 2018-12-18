/**
 * Action Types
 */
export const ADD_EVENT = 'ADD_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const LOAD_EVENTS = 'LOAD_EVENTS';

/**
 *  action creators
 */

export function addEvent(event) {
  return { type: ADD_EVENT, event };
}

export function updateEvent(event) {
  return { type: UPDATE_EVENT, event };
}

export function loadEvent(events) {
  return { type: LOAD_EVENTS, events };
}
