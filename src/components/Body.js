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
                <input type="radio" name={question.id} value={index} onChange={(event) => {
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
  }

  render() {
    const showSubmit = true;
    return (
      <div>
        {this.props.questions.map(this.mapQuestions.bind(this))}
        {showSubmit ?
          <button onClick={this.props.onSubmit}>
            submit
          </button>
          :
          null
        }
      </div>
    );
  }
}

export default Body;
