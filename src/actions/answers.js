import { SELECT_ANSWER, SUBMIT_ANSWERS } from '../actions/consts';

export function selectAnswer(answer, questionId, page) {
  return {
    type: SELECT_ANSWER,
    answer,
    questionId,
    page
  }
}

export function submitAnswers(page) {
  return {
    type: SUBMIT_ANSWERS,
    page
  }
}
