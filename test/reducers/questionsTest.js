/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import questions from 'reducers/questions';
import deepFreeze from 'deep-freeze';
import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from 'actions/consts';

describe('reducers', () => {
  it('request questions', () => {
    const state = deepFreeze({});

    const newState = questions(state, {
      type: REQUEST_QUESTIONS
    });

    expect(newState).to.eql({
      isFetching: true,
      invalid: false
    });
  });

  it('receive questions', () => {
    const state = deepFreeze({});

    const newState = questions(state, {
      type: RECEIVE_QUESTIONS,
      data: {
        foo: 'bar'
      }
    });

    expect(newState).to.eql({
      isFetching: false,
      invalid: false,
      data: {
        foo: 'bar'
      }
    });
  });

  it('invalid page', () => {
    const state = deepFreeze({});

    const newState = questions(state, {
      type: INVALID_PAGE,
      reason: 'foo'
    });

    expect(newState).to.eql({
      isFetching: false,
      invalid: true,
      reason: 'foo'
    });
  });

  it('unknown action', () => {
    const state = deepFreeze({});

    const newState = questions(state, {
      type: 'what'
    });

    expect(newState).to.eql({});
  });
});
