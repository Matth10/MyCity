/**
 * Imports
 */
import * as fromEventActions from '../../actions/events.actions';
import {
  fetchEvents,
  addEvent,
  updateParticipantsEvent,
} from '../../../services/events.service';
import { Observable } from 'rxjs-compat';

/**
 * Epics related to events
 */

export const loadEventsEpic = action$ =>
  action$.ofType(fromEventActions.LOAD_EVENTS_FETCHING).mergeMap(action =>
    Observable.fromPromise(fetchEvents())
      .map(response => fromEventActions.loadEventsSuccess(response.data.events))
      .catch(error =>
        Observable.of({ type: 'LOAD_EVENTS_FAILED', payload: error })
      )
  );

export const addEventEpic = action$ =>
  action$.ofType(fromEventActions.ADD_EVENT_FETCHING).mergeMap(action =>
    Observable.fromPromise(addEvent(action.event))
      .map(response => fromEventActions.addEventSuccess(response.data.createEvent))
      .catch(error =>
        Observable.of({ type: 'ADD_EVENT_FAILED', payload: error })
      )
  );

export const updateParticipantsEpic = action$ =>
  action$
    .ofType(fromEventActions.UPDATE_PARTICIPANTS_FETCHING)
    .mergeMap(action =>
      Observable.fromPromise(
        updateParticipantsEvent(
          action.payload.event_id,
          action.payload.participants
        )
      )
        .map(response =>
          fromEventActions.updateParticipantsSuccess(response.data.updateEvent)
        )
        .catch(error =>
          Observable.of({ type: 'UPDATE_PARTICIPANTS_FAILED', payload: error })
        )
    );
