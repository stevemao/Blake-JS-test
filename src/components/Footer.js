import React from 'react';
import PageLink from '../containers/PageLink';

const footerStyle = {
  width: '100%',
  position: 'fixed',
  bottom: '15px',
  userSelect: 'none'
}

class Footer extends React.Component {
  render() {
    const page = this.props.page;
    const pageCount = this.props.pageCount;

    return (
      <div style={footerStyle}>
        <PageLink
          page={page - 1}
          minPage={1}
          maxPage={pageCount}>
          Previous
        </PageLink>
        {' '}
        <span>{page}/{pageCount}</span>
        {' '}
        <PageLink
          page="progress">
          Show Progress
        </PageLink>
      </div>
    );
  }
}

Footer.defaultProps = {
  page: React.PropTypes.number.isRequired,
  pageCount: React.PropTypes.number.isRequired
};

export default Footer;
