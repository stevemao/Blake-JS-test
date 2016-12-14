import fetch from 'isomorphic-fetch';
import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from '../actions/consts';

let shouldFetchQuestions = true;

function requestQuestions() {
  return {
    type: REQUEST_QUESTIONS
  }
}

function receiveQuestions(data, page) {
  if (typeof data === 'string') {
    return invalidPage(data)
  }

  return {
    type: RECEIVE_QUESTIONS,
    data,
    page
  }
}

function invalidPage(reason) {
  return {
    type: INVALID_PAGE,
    reason
  }
}

function fetchQuestions(page) {
  return dispatch => {
    dispatch(requestQuestions())
    return Promise.all([
      fetch('/data/questions.json')
        .then(response => {
          return response.json();
        }),
      fetch('/data/quizzes.json')
        .then(response => {
          return response.json();
        })
    ])
      .then(data => {
        let ret = Object.assign(data[0], data[1]);
        shouldFetchQuestions = false;
        return dispatch(receiveQuestions(ret, page))
      });
  }
}

export function fetchQuestionsIfNeeded(page) {
  return (dispatch, getState) => {
    if (shouldFetchQuestions) {
      return dispatch(fetchQuestions(page))
    } else {
      return dispatch(receiveQuestions(getState().questions.data, page))
    }
  }
}
