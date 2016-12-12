import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS, INVALID_PAGE } from '../actions/consts'

function posts(state = {
  isFetching: false,
  invalid: false,
  data: {}
}, action) {
  switch (action.type) {
    case INVALID_PAGE:
      return Object.assign({}, state, {
        isFetching: false,
        invalid: true,
        reason: action.reason
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        invalid: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        invalid: false,
        data: action.data
      })
    default:
      return state
  }
}

function postsByPage(state = { }, action) {
  switch (action.type) {
    case INVALID_PAGE:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.page]: posts(state[action.page], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByPage
})

export default rootReducer
