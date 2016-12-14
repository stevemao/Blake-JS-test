/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import answers from 'reducers/answers';
import deepFreeze from 'deep-freeze';
import { SELECT_ANSWER } from 'actions/consts';

describe('reducers', () => {
  it('select answer', () => {
    const state = deepFreeze({});

    const newState = answers(state, {
      type: SELECT_ANSWER,
      page: 1,
      questionId: 2,
      answer: 3
    });

    expect(newState).to.eql({
      1: {
        2: 3
      }
    });
  });

  it('select answer in the same question', () => {
    const state = deepFreeze({});

    const newState = answers(state, {
      type: SELECT_ANSWER,
      page: 1,
      questionId: 2,
      answer: 1
    });

    expect(newState).to.eql({
      1: {
        2: 1
      }
    });
  });

  it('select another answer on the same page', () => {
    const state = deepFreeze({
      1: {
        2: 3
      }
    });

    const newState = answers(state, {
      type: SELECT_ANSWER,
      page: 1,
      questionId: 1,
      answer: 2
    });

    expect(newState).to.eql({
      1: {
        2: 3,
        1: 2
      }
    });
  });

  it('unknown action', () => {
    const state = deepFreeze({});

    const newState = answers(state, {
      type: 'what'
    });

    expect(newState).to.eql({});
  });
});
