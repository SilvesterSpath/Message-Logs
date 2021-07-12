import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReduser from './techReducer';

export default combineReducers({
  log: logReducer,
  tech: techReduser,
});
