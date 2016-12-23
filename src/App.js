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
            console.log(el)
          })}
        </div>
      </div>
    );
  }
}

export default App;
