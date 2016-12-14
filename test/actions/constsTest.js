/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from 'actions/consts';

describe('actions/consts', () => {
  it('should be a string', () => {
    expect(REQUEST_QUESTIONS).to.be.a('string');
    expect(RECEIVE_QUESTIONS).to.be.a('string');
    expect(INVALID_PAGE).to.be.a('string');
  });
});
