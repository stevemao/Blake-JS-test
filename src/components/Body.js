import React from 'react';

const h2Style = {
  fontSize: '20px'
}

const labelStyle = {
  marginLeft: '10px'
}

class Body extends React.Component {
  mapQuestions(question) {
    return (
      <div key={question.id}>
        <h2 style={h2Style}>{question.question}</h2>
        <ol>
          {question.answers.map((answer, index) => {
            return (
              <li key={index}>
                <label>
                <input type="radio" name={question.id} />
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
  }

  render() {
    return (
      <div>
        {this.props.questions.map(this.mapQuestions)}
      </div>
    );
  }
}

Body.defaultProps = {
  hits: React.PropTypes.array.isRequired
};

export default Body;
