import { createStore, combineReducers } from 'redux';
import { eventsReducer } from '../reducers/events.reducers';
import { userReducer } from '../reducers/user.reducer';
/**
 * Create root reducer
 */
const rootReducer = combineReducers({
  eventsReducer,
  userReducer,
});

/**
 * Create the app store
 */
export const store = createStore(rootReducer);
