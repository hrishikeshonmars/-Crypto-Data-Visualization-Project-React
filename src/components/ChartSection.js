import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export class ChartSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'main-chart'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Main chart */}
          <div style={{ marginRight: '20px' }}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="1000"
            />
          </div>

          {/* Small charts */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '20px' }}>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
              />
            </div>
            <div>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartSection;
