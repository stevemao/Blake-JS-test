import React from 'react';
import PageLink from './PageLink';

const h2Style = {
  fontSize: '20px'
}

const labelStyle = {
  marginLeft: '10px'
}

class Body extends React.Component {
  mapQuestions = (question) => (
    <div key={question.id}>
      <h2 style={h2Style}>{question.question}</h2>
      <ol>
        {question.answers.map((answer, index) => {
          let checked;
          const answersOnPage = this.props.answersOnPage;

          if (answersOnPage) {
            checked = answersOnPage[question.id] === index;
          } else {
            checked = false;
          }

          return (
            <li key={index}>
              <label>
                <input type="radio" name={question.id} value={index} checked={checked} onChange={(event) => {
                  this.props.onChange(parseInt(event.currentTarget.value), question.id, this.props.page);
                }} />
                <span style={labelStyle}>
                  {answer}
                </span>
              </label>
            </li>
          );
        })}
      </ol>
    </div>
  );

  onSubmit = () => (
    this.props.onSubmit(this.props.page)
  )

  render() {
    return (
      <div>
        {this.props.questions.map(this.mapQuestions)}
        {this.props.showSubmit ?
          <PageLink
            page={this.props.page + 1}
            minPage={1}
            maxPage={this.props.pageCount}>
            Submit
          </PageLink>
          :
          null
        }
      </div>
    );
  }
}

export default Body;
