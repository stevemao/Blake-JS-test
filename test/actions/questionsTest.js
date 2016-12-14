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
import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, INVALID_PAGE } from 'actions/consts';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('questions actions', () => {
  it('should fetch questions', () => {
    const page = 1;

    const store = mockStore({
      questionsByPage: {}
    });

    const expectedAction1 = {
      type: REQUEST_QUESTIONS,
      page
    }

    return store.dispatch(fetchQuestionsIfNeeded(page))
      .then(() => { // return of async actions
        const actions = store.getActions();
        expect(actions.length).to.eql(2);
        expect(actions[0]).to.eql(expectedAction1);
        expect(actions[1].type).to.eql(RECEIVE_QUESTIONS);
        expect(actions[1].page).to.eql(page);
      })
  });

  it('should cache questions', () => {
    const store = mockStore({
      questionsByPage: {
        '1': {
          data: {}
        }
      }
    });

    expect(store.dispatch(fetchQuestionsIfNeeded(1))).to.be.an('undefined');
  });

  it('should fail', () => {
    const page = 100000000000;

    const store = mockStore({
      questionsByPage: {}
    });

    const expectedAction1 = {
      type: REQUEST_QUESTIONS,
      page
    }

    return store.dispatch(fetchQuestionsIfNeeded(page))
      .then(() => { // return of async actions
        const actions = store.getActions();
        expect(actions.length).to.eql(2);
        expect(actions[0]).to.eql(expectedAction1);
        expect(actions[1].type).to.eql(INVALID_PAGE);
        expect(actions[1].page).to.eql(page);
      })
  });
});
