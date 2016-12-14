import fetch from 'isomorphic-fetch'
import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from './consts'

function requestPosts() {
  return {
    type: REQUEST_QUESTIONS
  }
}

function receivePosts(data, page) {
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

function fetchPosts(page) {
  return dispatch => {
    dispatch(requestPosts())
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
        return dispatch(receivePosts(ret, page))
      });
  }
}

function shouldFetchPosts() {
  // FIXME
  return true;
}

export function fetchPostsIfNeeded(page) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts(page))
    }
  }
}
