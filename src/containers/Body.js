import { connect } from 'react-redux';
import { selectAnswer, submitAnswers } from '../actions';
import Body from '../components/Body';

export function mapStateToProps(state, ownProps) {
  let showSubmit;
  const page = ownProps.page;
  const answersOnPage = state.answers[page];
  const questions = ownProps.questions;

  if (answersOnPage && questions.length === Object.keys(answersOnPage).length) {
    showSubmit = true;
  } else {
    showSubmit = false;
  }

  return {
    showSubmit,
    answersOnPage
  };
}

export function mapDispatchToProps (dispatch) {
  return {
    onChange: (answer, questionId, page) => {
      dispatch(selectAnswer(answer, questionId, page));
    },
    onSubmit: (page) => {
      dispatch(submitAnswers(page));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
