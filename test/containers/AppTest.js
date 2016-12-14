/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import deepFreeze from 'deep-freeze';
import { mapStateToProps } from 'containers/App';
const quize1questionsData = [{
  id: 1,
  question: 'What is the second largest country (total area)?',
  answers: [
    'United States',
    'Russia',
    'Canada',
    'China'
  ],
  correct_answer: 2
},
{
  id: 2,
  question: 'What is the most common language?',
  answers: [
    'English',
    'Hindi',
    'Spanish',
    'Mandarin'
  ],
  correct_answer: 3
}];

const questions = {
  questions: [
    ...quize1questionsData, {
    id: 3,
    question: 'What is the largest ocean?',
    answers: [
      'Pacific Ocean',
      'Southern Ocean',
      'Indian Ocean',
      'Atlantic Ocean'
    ],
    correct_answer: 0
  }]
};

const quizzes = {
  quizzes: [{
    id: 1,
    title: 'Quiz 1',
    question_ids: [1, 2]
  }, {
    id: 2,
    title: 'Quiz 2',
    question_ids: [3, 2]
  }]
};

const state = deepFreeze({
  questions: {
    data: {
      ...questions,
      ...quizzes
    }
  }
});

describe('App mapStateToProps', () => {
  it('should get the correct questionsData if questions exist', () => {
    const ownProps = deepFreeze({
      params: {
        page: 1
      }
    });

    expect(mapStateToProps(state, ownProps)).to.eql({
      questions: state.questions,
      questionsData: quize1questionsData,
      page: 1
    });
  });

  it('should default to page 1', () => {
    const ownProps = deepFreeze({
      params: {}
    });

    expect(mapStateToProps(state, ownProps)).to.eql({
      questions: state.questions,
      questionsData: quize1questionsData,
      page: 1
    });
  });

  it('should not get questionsData if questions do not exist', () => {
    const questions = {
      data: {}
    };

    const state = deepFreeze({
      questions
    });

    const ownProps = deepFreeze({
      params: {
        page: 1
      }
    });

    expect(mapStateToProps(state, ownProps)).to.eql({
      questions,
      questionsData: null,
      page: 1
    });
  });
});
