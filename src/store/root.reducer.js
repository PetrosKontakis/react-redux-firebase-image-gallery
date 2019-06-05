import { combineReducers } from 'redux';
import documentReducer from './documents.reducer';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
  document: documentReducer,
  auth: authReducer
});

export default rootReducer
