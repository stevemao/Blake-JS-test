/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import { REQUEST_POSTS, RECEIVE_POSTS, INVALID_PAGE } from 'actions/consts';

describe('actions/consts', () => {
  it('should be a string', () => {
    expect(REQUEST_POSTS).to.be.a('string');
    expect(RECEIVE_POSTS).to.be.a('string');
    expect(INVALID_PAGE).to.be.a('string');
  });
});
