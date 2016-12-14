import { connect } from 'react-redux';
import { selectAnswer, submitAnswers } from '../actions';
import Body from '../components/Body';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (answer, questionId, page) => {
      dispatch(selectAnswer(answer, questionId, page));
    },
    onSubmit: () => {
      dispatch(submitAnswers());
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Body);
