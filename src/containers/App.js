import { connect } from 'react-redux';
import Main from '../components/Main';

export function filterQuestions(questionsData, quizzes, page) {
  let questionIds = [];
  const ret = [];
  quizzes.some((quiz) => {
    if (quiz.id === page) {
      questionIds = quiz.question_ids
      return true;
    }
  });

  questionIds.forEach((id) => {
    questionsData.some((question) => {
      if (question.id === id) {
        ret.push(question);
        return true;
      }
    });
  });

  return ret;
}

export function mapStateToProps(state, ownProps) {
  const data = state.questions.data;

  let page = ownProps.params.page;
  if (page !== 'progress') {
    if (!page) {
      page = 1;
    } else {
      page = parseInt(page);
    }
  }

  return {
    questions: state.questions,
    questionsData: data.questions ? filterQuestions(data.questions, data.quizzes, page) : null,
    page
  }
}

export default connect(mapStateToProps)(Main);
