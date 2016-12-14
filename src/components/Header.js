import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          {this.props.title}
        </h1>
      </header>
    );
  }
}

Header.defaultProps = {
  title: React.PropTypes.string.isRequired
};

export default Header;
