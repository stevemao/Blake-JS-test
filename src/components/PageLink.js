import React from 'react';
import { Link } from 'react-router';

class PageLink extends React.Component {
  render() {
    const page = this.props.page;
    if (page < this.props.minPage || page > this.props.maxPage) {
      return <span>{this.props.children}</span>
    }

    return (
      <Link to={`/${page}`}>
        {this.props.children}
      </Link>
    );
  }
}

PageLink.defaultProps = {
  page: React.PropTypes.number.isRequired,
  minPage: React.PropTypes.number.isRequired,
  maxPage: React.PropTypes.number.isRequired
};

export default PageLink;
