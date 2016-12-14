import { SELECT_ANSWER, SUBMIT_ANSWERS } from '../actions/consts';

export default function (state = {}, action) {
  switch (action.type) {
    case SELECT_ANSWER:
      return  Object.assign({}, state, {
        [action.page]: {
          ...state[action.page],
          [action.questionId]: action.answer,
        }
      });
    case SUBMIT_ANSWERS:
      return Object.assign({}, state, {

      });
    default:
      return state;
  }
}
