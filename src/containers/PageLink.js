import { connect } from 'react-redux';
import PageLink from '../components/PageLink';

export function mapStateToProps(state, ownProps) {
  const page = ownProps.page;

  return {
    disabled: page < ownProps.minPage,
    linkTo: page > ownProps.maxPage ? '/progress' : `/${page}`
  };
}

export default connect(mapStateToProps)(PageLink);
