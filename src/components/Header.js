import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          Quiz {this.props.page}
        </h1>
        
      </header>
    );
  }
}

export default Header;
