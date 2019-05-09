import React from 'react';
import ReactDOM from 'react-dom';

function App () {

  fetch('https://api.coindesk.com/v1/bpi/historical/close.json', {
    method: "GET"
  })
    .then( response => {return response.json()})
    .then( data => console.log(data))
    .catch(error => console.log('Failed to get data', error))  

  return (
    <div>
      Hello
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));