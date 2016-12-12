/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import rootReducer from 'reducers';
import deepFreeze from 'deep-freeze';
import { REQUEST_POSTS, RECEIVE_POSTS, INVALID_PAGE } from 'actions/consts';

describe('reducers', () => {
  it('request posts', () => {
    const state = deepFreeze({});

    const newState = rootReducer(state, {
      type: REQUEST_POSTS,
      page: 1
    });

    expect(newState.postsByPage[1]).to.eql({
      isFetching: true,
      invalid: false,
      data: {}
    });
  });

  it('receive posts', () => {
    const state = deepFreeze({});

    const newState = rootReducer(state, {
      type: RECEIVE_POSTS,
      page: 1,
      data: {
        foo: 'bar'
      }
    });

    expect(newState.postsByPage[1]).to.eql({
      isFetching: false,
      invalid: false,
      data: {
        foo: 'bar'
      }
    });
  });

  it('invalid page', () => {
    const state = deepFreeze({});

    const newState = rootReducer(state, {
      type: INVALID_PAGE,
      page: 1,
      reason: 'foo'
    });

    expect(newState.postsByPage[1]).to.eql({
      isFetching: false,
      invalid: true,
      reason: 'foo',
      data: {}
    });
  });

  it('unknown action', () => {
    const state = deepFreeze({});

    const newState = rootReducer(state, {
      type: 'what'
    });

    expect(newState.postsByPage).to.eql({});
  });
});
