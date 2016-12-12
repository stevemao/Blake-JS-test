import fetch from 'isomorphic-fetch'
import { REQUEST_POSTS, RECEIVE_POSTS, INVALID_PAGE } from './consts'

function requestPosts(page) {
  return {
    type: REQUEST_POSTS,
    page
  }
}

function receivePosts(data, page) {
  if (typeof data === 'string') {
    return invalidPage(data, page)
  }
  return {
    type: RECEIVE_POSTS,
    data,
    page
  }
}

function invalidPage(reason, page) {
  return {
    type: INVALID_PAGE,
    reason,
    page
  }
}

function fetchPosts(page) {
  return dispatch => {
    dispatch(requestPosts(page))
    return fetch('/data/questions.json')
      .then(response => {
        if (!response.ok) {
          return response.text();
        }
        return response.json();
      })
      .then(data => dispatch(receivePosts(data, page)))
  }
}

function shouldFetchPosts(state, page) {
  if (state.hasOwnProperty(page)) {
    return false;
  }

  return true;
}

export function fetchPostsIfNeeded(page) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState().postsByPage, page)) {
      return dispatch(fetchPosts(page))
    }
  }
}
