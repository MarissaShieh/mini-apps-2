import React from 'react';
import ReactDOM from 'react-dom';
import ChartComponent from './ChartComponent.jsx'

class App extends React.Component{
  constructor () {
    super();
    this.state = {
      labels: [],
      bitData: []
    }
  }

  componentDidMount(){
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json', {
      method: "GET"
    })
      .then( response => {return response.json()})
      .then( data => {
        const labels = [];
        const bitData = [];
        for (let keys in data.bpi) {
          labels.push(keys);
          bitData.push(data.bpi[keys]);
        }
        this.setState({
          labels: labels,
          bitData: bitData
        })
      })
      .catch(error => console.log('Failed to get data', error))  
  }
    
  render() {
    return (
      <div>
        Cryptocurrent info:
        {this.state.labels.length > 0 && <ChartComponent labels={this.state.labels} bitData={this.state.bitData}/>}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));