import React from 'react';
import PageLink from './PageLink';
import { Pie as PieChart } from 'react-chartjs';

const progressStyle = {
  textAlign: 'center'
}

const chartBlockStyle = {
  marginTop: '15px',
  marginBottom: '15px'
}

class Progress extends React.Component {
  render() {
    return (
      <div style={progressStyle}>
        <h1>
          Your progress
        </h1>
        {this.props.chartInfo.map((info) => (
          <div key={info.id} style={chartBlockStyle}>
            <h3>
              {info.title}
            </h3>
            <PieChart data={info.chartData} />
          </div>
        ))}

        <PageLink linkTo='/1' disabled={false}>
          Start over
        </PageLink>
      </div>
    );
  }
}

Progress.defaultProps = {
  chartInfo: React.PropTypes.array.isRequired
};

export default Progress;
