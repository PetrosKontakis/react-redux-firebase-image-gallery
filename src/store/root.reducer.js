import { combineReducers } from 'redux'
import documentReducer from './documents.reducer';

const rootReducer = combineReducers({
  document: documentReducer,
});

export default rootReducer
