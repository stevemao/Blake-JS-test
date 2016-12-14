import { connect } from 'react-redux';
import Progress from '../components/Progress';

const mapStateToProps = (state) => {
  return {
    data: state.questions.data,
    answers: state.answers
  };
}

export default connect(
  mapStateToProps,
)(Progress);
