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
    if (this.props.disabled) {
      return <span>{this.props.children}</span>
    }

    return (
      <Link to={this.props.linkTo} style={enabledLinkStyle}>
        {this.props.children}
      </Link>
    );
  }
}

PageLink.defaultProps = {
  disabled: React.PropTypes.bool.isRequired,
  linkTo: React.PropTypes.string.isRequired
};

export default PageLink;
