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

function filterQuestions(questions, quizzes, page) {
  let questionIds = [];
  const ret = [];
  quizzes.some((quiz) => {
    if (quiz.id === page) {
      questionIds = quiz.question_ids
      return true;
    }
  });

  questionIds.forEach((id) => {
    questions.some((question) => {
      if (question.id === id) {
        ret.push(question);
        return true;
      }
    });
  });

  return ret;
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
      let page = props.params.page;
      if (!page) {
        page = 1;
      } else {
        page = parseInt(page);
      }

      const quizzes = data.quizzes;
      const pageCount = quizzes.length;

      return (
        <div className="index" style={indexStyle}>
          {this.props.params.page === 'progress' ?
            <Progress /> :
            <div>
              <Header title={quizzes[page - 1].title} />
              <Body questions={filterQuestions(data.questions, quizzes, page)} page={page} pageCount={pageCount} />
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

export default AppComponent;
