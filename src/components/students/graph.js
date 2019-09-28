
import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import firebase from '../../FireBase/FireStore';

class Graph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      studGrades:props.mikztuut,
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
          categories: [],
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
      series: props.mikztuut.map(m => ({name: m.profName, data: m.listOfGrades}))

    }
  }


 componentDidMount() {
    const db = firebase.firestore();
    const ref = db.collection("mahatzit").doc("mahatzit");
    ref.get().then(doc => {
        if (doc.exists) {
             const tempArr = doc.data().mahatzit;
             this.setState({
              options: {
                    ...this.state.options, xaxis: {
                      ...this.state.options.xaxis, categories: tempArr
                    }
              }
          }) 
        } else {
            console.log("No such document!");
        }
    }).catch(error => {
        console.log("Error getting document:", error);
    });
  let tempArrForSerias = this.state.studGrades.map((prof)=>
        prof.profName
    );
    


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