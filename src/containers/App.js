import { connect } from 'react-redux';
import Main from '../components/Main';

export function mapStateToProps(state, ownProps) {
  let page = ownProps.params.page;
  if (!page) {
    page = 1;
  }
  const props = state.postsByPage[page];
  return props ? props : {};
}

export default connect(mapStateToProps)(Main);
