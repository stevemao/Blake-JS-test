import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from '../actions/consts';

export default function (state = {
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
      });
    case REQUEST_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        invalid: false
      });
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        invalid: false,
        data: action.data,
        page: action.page
      });
    default:
      return state;
  }
}
