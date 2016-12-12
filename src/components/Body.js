import React from 'react';

const rowStyle = {
  marginTop: '10px',
  marginBottom: '10px'
};

class Body extends React.Component {
  render() {
    return (
      <div>
        this.props
      </div>
    );
  }
}

Body.defaultProps = {
  hits: React.PropTypes.array.isRequired
};

export default Body;
