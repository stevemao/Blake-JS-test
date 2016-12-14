/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import { selectAnswer } from 'actions';
import { SELECT_ANSWER } from 'actions/consts';

describe('answers actions', () => {
  it('should generate a "select answer" action', () => {
    expect(selectAnswer(1, 2, 3)).to.eql({
      type: SELECT_ANSWER,
      answer: 1,
      questionId: 2,
      page: 3
    });
  });
});
