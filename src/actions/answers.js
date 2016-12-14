import { SELECT_ANSWER } from '../actions/consts';

export function selectAnswer(answer, questionId, page) {
  return {
    type: SELECT_ANSWER,
    answer,
    questionId,
    page
  }
}
