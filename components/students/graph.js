
import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Graph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          shadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'ציוני התלמיד לאורך זמן',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          
          size: 6
        },
        xaxis: {
          categories: ['1926 א', '1926 ב', '1927 א'],
          title: {
            text: 'מחצית'
          }
        },
        yaxis: {
          title: {
            text: 'ציון'
          },
          min: 0,
          max: 100
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
      series: [
        {
          name: "מתמטיקה",
          data: [87, 65, 77]
        },
        {
          name: "אנגלית",
          data: [42, 81, 99]
        }
      ],
    }
  }


  render() {

    return (
      <div className="donut">
  <Chart
options={this.state.options} series={this.state.series} type="line" height="350"/>
  </div>
    );
  }
}

export default Graph;