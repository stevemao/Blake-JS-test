import React from 'react';
import PageLink from './PageLink';

class Footer extends React.Component {
  render() {
    const page = parseInt(this.props.page);
    const pageCount = parseInt(this.props.pageCount);

    return (
      <div>
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
          page={page + 1}
          minPage={1}
          maxPage={pageCount}>
          Next
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
