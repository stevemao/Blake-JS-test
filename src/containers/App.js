import { connect } from 'react-redux';
import Main from '../components/Main';

export function mapStateToProps(state) {
  return state.questions;
}

export default connect(mapStateToProps)(Main);
