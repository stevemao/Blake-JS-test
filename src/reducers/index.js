import { combineReducers } from 'redux';
import questions from './questions';
import answers from './answers';

const rootReducer = combineReducers({
  questions,
  answers
})

export default rootReducer
