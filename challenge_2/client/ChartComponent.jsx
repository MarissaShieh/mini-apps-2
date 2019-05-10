import React from 'react';
import Chart from 'chart.js';

class ChartComponent extends React.Component {
  constructor(props){
    super(props);
  }

  renderChart(){
    var {labels, bitData} = this.props;
    
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: 'Bitcoin',
                backgroundColor: 'rgb(133, 187, 101)',
                borderColor: 'rgb(133, 187, 101)',
                data: bitData
            }]
        },
    
        // Configuration options go here
        options: {}
    });
  }
  
  render(){
    this.renderChart();
    return (
      <div>
        Powered by <a href="https://www.coindesk.com/price/bitcoin">CoinDesk</a>
      </div>
    )
  }
}

export default ChartComponent;
