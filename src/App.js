import React, { Component } from 'react';
import MyAwesomeReactComponent from './test.js';
import logo from './logo.png';
import './App.css';
import resources from './resources.json'; //importing data from JSON file

// order each object by the `order` k/v pair

let byOrder = resources.slice(0);
byOrder.sort((a,b) => {
    return a.order - b.order;
});

console.log(byOrder.type,'<----byOrder BEFORE FOR LOOP');

// for (var i = 0; i < byOrder.length; i++) {
//   if(byOrder[i].type === 'Person'){
//     console.log(byOrder[i+1].type,'<----byOrder[i+1].type');
//     if(byOrder[i+1].type === 'Person'){
//       let newObj = {
//         type: byOrder[i].type,
//         order: byOrder[i].order,
//         people: [byOrder[i].name, byOrder[i-1].name]
//       }
//       byOrder.splice( i-1, 2, newObj )
//     }
//   }
// }

// take array of type, if array has two people in a row,
// splice one object out of the array and add the names together in one

let output_generator = (resources) => {
  return resources.map(( el, index ) => {
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

let output = output_generator(byOrder)

let object_type = output.map((el,index,arr)=>{
  return el.type
})
console.log(object_type,'<----object_type');

let concat_persons = object_type.map((el,index,arr)=>{
  if(el === "Person" && arr[index + 1] === "Person" ){
    return index
  } else {
    return undefined
  }
})

let splice_index = []
concat_persons.map((el,index,arr)=>{
  if(!isNaN(el)){
    splice_index.push(el)
    return true;
  } else {
    return false
  }
})

for (var i = 0; i < splice_index.length; i++) {
  let newObjArr = []
  newObjArr.push(output[splice_index[i]].people)

console.log(output[splice_index[i]].people,'<----splice_index[i]');
  console.log(newObjArr,'<----newObjArr');
  let newObj = {
    type: 'type',
    order: 'order',
    people: [newObjArr]
  }
  output.splice(splice_index[i],2,newObj)
}

console.log(output, 'new output')

class AppJS extends Component {
  constructor(props) {
      super(props);
      this.state = {
        resources: resources,
      };
  }

  render() {
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
        <MyAwesomeReactComponent />
      </div>
    );
  }
}

export default AppJS;
