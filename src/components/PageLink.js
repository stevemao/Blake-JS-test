import React from 'react';
import { Link } from 'react-router';

const linkStyle = {
  padding: '8px',
  borderRadius: '8px',
  color: 'black',
  textDecoration: 'none'
}

const enabledLinkStyle = Object.assign({}, linkStyle, {
  background: '#00FFFF'
});

class PageLink extends React.Component {
  render() {
    const page = this.props.page;
    const disabled = page < this.props.minPage;
    const hide =  page > this.props.maxPage;
    if (disabled) {
      return <span>{this.props.children}</span>
    } else if (hide) {
      return null;
    }

    return (
      <Link to={`/${page}`} style={enabledLinkStyle}>
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
