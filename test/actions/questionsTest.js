/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchQuestionsIfNeeded } from 'actions';
import fetchMock from 'fetch-mock';
import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from 'actions/consts';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('questions actions', () => {
  fetchMock.get('*', { hello: 'world' });

  it('should fetch questions', () => {
    const store = mockStore();

    return store.dispatch(fetchQuestionsIfNeeded())
      .then(() => { // return of async actions
        const actions = store.getActions();
        expect(actions.length).to.eql(2);
        expect(actions[0].type).to.eql(REQUEST_QUESTIONS);
        expect(actions[1].type).to.eql(RECEIVE_QUESTIONS);
        expect(actions[1].data).to.eql({
          hello: 'world'
        });
      });
  });

  it('should cache questions', () => {
    const store = mockStore();

    expect(store.dispatch(fetchQuestionsIfNeeded())).to.be.an('undefined');
  });
});
