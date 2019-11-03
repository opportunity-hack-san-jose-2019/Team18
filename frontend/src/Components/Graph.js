import React, { Component } from 'react';
import Plotly from 'plotly.js-dist'

class Graph extends Component {
    render() {

        var trace1 = {
            x: ['Attendance', 'Module Score', 'Project Score', 'Total Score'],
            y: [85.7142857, 81.5835728, 93.3333333, 87.1527778],
            type: 'bar',
            text: ['7% below the mean', '1% below the mean', '9% above the mean',  '1% above the mean'],
            marker: {
              color: 'rgb(142,124,195)'
            }
          };
          
          var data = [trace1];
          
          var layout = {
            title: 'Number of Graphs Made this Week',
            font:{
              family: 'Raleway, sans-serif'
            },
            showlegend: false,
            xaxis: {
              tickangle: -45
            },
            yaxis: {
              zeroline: false,
              gridwidth: 2
            },
            bargap :0.05
          };
          
          Plotly.newPlot('myDiv', data, layout, {showSendToCloud:true});

        return (
            <div>
                  <div id="myDiv"></div>
            </div>
        );
    }
}

export default Graph;