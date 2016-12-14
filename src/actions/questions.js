import fetch from 'isomorphic-fetch';
import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from '../actions/consts';

let shouldFetchPosts = true;

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
        shouldFetchPosts = false;
        return dispatch(receivePosts(ret, page))
      });
  }
}

export function fetchPostsIfNeeded(page) {
  return (dispatch, getState) => {
    if (shouldFetchPosts) {
      return dispatch(fetchPosts(page))
    } else {
      return dispatch(receivePosts(getState().questions.data, page))
    }
  }
}
