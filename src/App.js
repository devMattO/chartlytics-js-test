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

//change key names

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
console.log(output,'output')


//getting obj type to see who needs to be grouped together
let object_type = output.map((el,index,arr)=>{
  return el.type
})
console.log(object_type,'<----object_type');

//if two objects in a row are of the type `Person` return the index of the first object
let concat_persons = object_type.map((el,index,arr)=>{
  if(el === "Person" && arr[index + 1] === "Person" ){
    return index
  } else {
    return undefined
  }
})

//gather all index that need grouping
let splice_index = []
concat_persons.map((el,index,arr)=>{
  if(!isNaN(el)){
    splice_index.push(el)
    return true;
  } else {
    return false
  }
})
console.log(splice_index,'splice_index')

// for each index listed it will delete that object and the following object and take the
//first object's order number and return a new object with both names in the `people` array
for (var i = 0; i < splice_index.length; i++) {
  let newObjArr = []
  newObjArr.push(output[splice_index[i]].people)
  newObjArr.push(output[splice_index[i] + 1].people)
  let newObj = {
    type: 'Person',
    order: output[splice_index[i]].order,
    people: newObjArr
  }
  output.splice(splice_index[i],2,newObj)
}

console.log(output, 'new output')

//creating component
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
