import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const resources = [{
        type: 'Person',
        order: 1,
        name: 'Brian',
      }, {
        type: 'Place',
        order: 2,
        name: 'Ohio',
      }, {
        type: 'Place',
        order: 12,
        name: 'Ohio',
      }, {
        type: 'Person',
        order: 14,
        name: 'Sarah',
      },  {
        type: 'Person',
        order: 199,
        name: 'Sam',
      }, {
        type: 'Person',
        order: 19,
        name: 'Eric',
      }, {
        type: 'Place',
        order: 20,
        name: 'Home',
      }
]

let byDate = resources.slice(0);
byDate.sort(function(a,b) {
    return a.order - b.order;
});
console.log('by date:');
console.log(byDate);

let output_generator = (resources)=>{
  return resources.map((el,index)=>{
    console.log(el.type,'<----el.type');
    if(el.type === 'Place'){
      return {
        type: el.type,
        order: el.order,
        name: el.name
      }
    } else {
      return {
        type: el.type,
        order: el.order,
        people: el.name
      }
    }
  })
}

let output = output_generator(byDate)

console.log(output.sort(),'muggah')

class App extends Component {
  render() {
    console.log(resources,'<----resources');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Chartlytics JS Test</h2>
        </div>
        <div id="outer-container">
          {resources.map((el,index)=>{
            return (
              <p key={index}>{
                `"type": "${el.type}",
                "order": ${el.order},
                "people": [
                  "${el.name}"
                ]`
              }</p>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
