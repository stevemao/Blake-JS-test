import React from 'react';
import Header from './Header';
import Body from '../containers/Body';
import Footer from './Footer';
import Progress from '../containers/Progress';
import loading from '../images/loading.gif';

const indexStyle = {
  margin: '20px auto'
}

const loadingStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
}

class AppComponent extends React.Component {
  render() {
    const questions = this.props.questions;
    const data = questions.data;

    if (questions.isFetching) {
      return (
        <img src={loading} style={loadingStyle} />
      );
    } else if (questions.invalid) {
      return (
        <div>
          Error<br />
          {questions.reason}
        </div>
      );
    } else if (data) {
      const quizzes = data.quizzes;
      const pageCount = quizzes.length;
      const page = this.props.page;

      return (
        <div className="index" style={indexStyle}>
          {page === 'progress' ?
            <Progress /> :
            <div>
              <Header title={quizzes[page - 1].title} />
              <Body questions={this.props.questionsData} page={page} pageCount={pageCount} />
              <Footer page={page} pageCount={pageCount} />
            </div>
          }
        </div>
      );
    }

    return (
      <div>
        Error<br />
        Unknown reason
      </div>
    );
  }
}

AppComponent.defaultProps = {
  questions: React.PropTypes.object.isRequired,
  page: React.PropTypes.number.isRequired,
  questionsData: React.PropTypes.array.isRequired
};

export default AppComponent;
