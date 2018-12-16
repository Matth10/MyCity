import { createStore, combineReducers } from 'react-redux';
import { eventsReducer } from '../reducers/events.reducers';

/**
 * Create root reducer
 */
const rootReducer = combineReducers({
  eventsReducer,
});

/**
 * Create the app store
 */
export const store = createStore(rootReducer);
