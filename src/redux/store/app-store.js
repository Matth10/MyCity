import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { eventsReducer } from '../reducers/events.reducers';
import { userReducer } from '../reducers/user.reducer';
import {
  loadEventsEpic,
  addEventEpic,
  updateParticipantsEpic,
} from '../middleware/epics/events.epic';
/**
 * Create the middleware
 */
const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
  loadEventsEpic,
  addEventEpic,
  updateParticipantsEpic
);

/**
 * Create root reducer
 */
const rootReducer = combineReducers({
  // pass all epic in her
  eventsReducer,
  userReducer,
});

/**
 * Create the app store
 */
export const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
