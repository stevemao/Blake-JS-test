import { combineReducers } from 'redux'
import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from '../actions/consts'

function questions(state = {
  isFetching: false,
  invalid: false,
  data: {}
}, action) {
  switch (action.type) {
    case INVALID_PAGE:
      return {
        isFetching: false,
        invalid: true,
        reason: action.reason
      };
    case REQUEST_QUESTIONS:
      return {
        isFetching: true,
        invalid: false
      };
    case RECEIVE_QUESTIONS:
      return {
        isFetching: false,
        invalid: false,
        data: action.data,
        page: action.page
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  questions
})

export default rootReducer
