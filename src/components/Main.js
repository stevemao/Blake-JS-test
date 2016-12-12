import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import loading from '../images/loading.gif';

const indexStyle = {
  margin: '20px auto',
  textAlign: 'center'
}

const loadingStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
}

class AppComponent extends React.Component {
  render() {
    const props = this.props;
    const data = props.data;

    if (props.isFetching) {
      return (
        <img src={loading} style={loadingStyle} />
      );
    } else if (props.invalid) {
      return (
        <div>
          Error<br />
          {props.reason}
        </div>
      );
    } else if (data) {
      return (
        <div className="index" style={indexStyle}>
          <Header />
          <Body hits={data.hits} />
          <Footer page={this.props.params.page} pageCount={data.meta.page_count} />
        </div>
      );
    }

    return (
      <div>
        Error
      </div>
    );
  }
}

export default AppComponent;
