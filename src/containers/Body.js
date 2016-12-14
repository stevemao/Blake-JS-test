import { connect } from 'react-redux';
import { selectAnswer, submitAnswers } from '../actions';
import Body from '../components/Body';

export function mapStateToProps(state) {
  return {
    answers: state.answers
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
