import React from 'react';
import { Link } from 'react-router';
import { Pie as PieChart } from 'react-chartjs';

class PageLink extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.quizzes.map((quiz) => {
          let correct = 0;
          let incorrect = 0;
          let unfinished = 0;
          const answers = this.props.answers[quiz.id];

          this.props.data.questions.forEach((question) => {
            let answer = null;
            if (answers) {
              answer = answers[question.id];
            }

            if (quiz.question_ids.indexOf(question.id) !== -1) {
              if (answer === question.correct_answer) {
                correct++;
              } else if (answer) {
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

          return (
            <div key={quiz.id}>
              <h3>
                {quiz.title}
              </h3>
              <PieChart data={chartData} />
            </div>
          );
        })}
        <Link to='/1'>
          Start over
        </Link>
      </div>

    );
  }
}

export default PageLink;
