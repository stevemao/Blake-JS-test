/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import configureStore from 'store';

describe('store', () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  it('should be a store', () => {
    expect(store.subscribe).is.not.an('undefined');
    expect(store.getState).is.a('function');
  });
});
