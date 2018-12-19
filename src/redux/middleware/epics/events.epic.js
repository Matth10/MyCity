/**
 * Imports
 */
import * as fromEventActions from '../../actions/events.actions';
import { store } from '../../store/app-store';
import {
  fetchEvents,
  addEvent,
  updateEvent,
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
    Observable.fromPromise(addEvent())
      .map(response => fromEventActions.addEventSuccess(response.data.event))
      .catch(error =>
        Observable.of({ type: 'ADD_EVENT_FAILED', payload: error })
      )
  );

export const updateEventEpic = action$ =>
  action$.ofType(fromEventActions.UPDTAE_EVENT_FETCHING).mergeMap(action =>
    Observable.fromPromise(fetchEvents())
      .map(response => fromEventActions.updateEventSuccess(response.data.event))
      .catch(error =>
        Observable.of({ type: 'UPDATE_EVENT_FAILED', payload: error })
      )
  );
