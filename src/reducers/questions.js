import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from '../actions/consts';

export default function (state = {
  isFetching: false,
  invalid: false,
  data: {}
}, action) {
  switch (action.type) {
    case INVALID_PAGE:
      return {
        ...state,
        isFetching: false,
        invalid: true,
        reason: action.reason
      };
    case REQUEST_QUESTIONS:
      return {
        ...state,
        isFetching: true,
        invalid: false
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        isFetching: false,
        invalid: false,
        data: action.data
      };
    default:
      return state;
  }
}
