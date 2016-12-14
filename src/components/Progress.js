import React from 'react';
import { Link } from 'react-router';
import { Pie as PieChart } from 'react-chartjs';

class PageLink extends React.Component {
  render() {
    return (
      <div>
        {this.props.chartInfo.map((info) => (
          <div key={info.id}>
            <h3>
              {info.title}
            </h3>
            <PieChart data={info.chartData} />
          </div>
        ))}

        <Link to='/1'>
          Start over
        </Link>
      </div>
    );
  }
}

PageLink.defaultProps = {
  chartInfo: React.PropTypes.array.isRequired
};

export default PageLink;
