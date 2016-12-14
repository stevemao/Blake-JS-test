import { SELECT_ANSWER } from '../actions/consts';

export default function (state = {}, action) {
  switch (action.type) {
    case SELECT_ANSWER:
      return  Object.assign({}, state, {
        [action.page]: {
          ...state[action.page],
          [action.questionId]: action.answer
        }
      });
    default:
      return state;
  }
}
