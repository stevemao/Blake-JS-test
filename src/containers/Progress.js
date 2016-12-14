import { connect } from 'react-redux';
import Progress from '../components/Progress';

export function mapStateToProps(state) {
  const ret = [];
  const data = state.questions.data;

  data.quizzes.forEach((quiz) => {
    let correct = 0;
    let incorrect = 0;
    let unfinished = 0;
    const answers = state.answers[quiz.id];

    data.questions.forEach((question) => {
      let answer;
      if (answers) {
        answer = answers[question.id];
      } else {
        answer = null;
      }

      if (quiz.question_ids.indexOf(question.id) !== -1) {
        if (answer === question.correct_answer) {
          correct++;
        } else if (answer != null) {
          incorrect++;
        } else {
          unfinished++;
        }
      }
    });

    const chartData = [{
      color: '#46BFBD',
      highlight: '#5AD3D1',
      label: 'Correct',
      value: correct
    }, {
      color: '#F7464A',
      highlight: '#FF5A5E',
      label: 'Incorrect',
      value: incorrect
    }, {
      color: '#949FB1',
      highlight: '#A8B3C5',
      label: 'Unfinished',
      value: unfinished
    }];

    ret.push({
      id: quiz.id,
      title: quiz.title,
      chartData
    });
  });

  return {
    chartInfo: ret
  };
}

export default connect(
  mapStateToProps,
)(Progress);
