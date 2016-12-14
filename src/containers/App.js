import { connect } from 'react-redux';
import Main from '../components/Main';

export function mapStateToProps(state) {
  return state.posts;
}

export default connect(mapStateToProps)(Main);
