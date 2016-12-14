import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS, INVALID_PAGE } from '../actions/consts'

function posts(state = {
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
    case REQUEST_POSTS:
      return {
        isFetching: true,
        invalid: false
      };
    case RECEIVE_POSTS:
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
  posts
})

export default rootReducer
