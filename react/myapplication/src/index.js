import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//import Car from './components/1-CarComponent'
//import Car from './components/2-FunComponent'
//import Car from './components/3-Constructor'
//import Car from './components/4-ComposabilityGarage';
//import Student from './components/5-Props_1';
//import Suv from './components/6-PropsConstructor';
//import Suv from './components/7-SetState';
//import ColoredCar from './components/8-SetState';
//import CarMount from './components/9-MountPhase';
//import CarUpdate from './components/10-UpdatePhase';
//import Container from './components/11-UnmountingPhase';
//import ButtonApp from './components/12-ButtonApp';
//import FetchData from './components/14-FetchAPI';
//import EventButton from './components/15-EventArgs';
//import Formsubmission from './components/16-FormSubmit';
//import Validation from './components/17-PropsValidation';
//import Assignment from './Assignments/Assignment01_02';
import InsertForm from './expressform/insertionform';
const root = ReactDOM.createRoot(document.getElementById('root'));

/* //demo1
var ele=<div>
  <h1>
    Hello World{5+5}
  </h1>
  <h2>
    This is Header 2
  </h2>
</div>
var user= prompt('enter username')
function greet(user) {
  var ele=(user)?<h1>Welcome {user}</h1>:<h1><font color='red'>Stranger... Warning</font></h1>
  return ele
} */

/* //demo5
var rno= prompt('enter roll no')
var name= prompt('enter name')
var cls= prompt('enter class')
 */

/* //demo7-8
var brand= prompt('enter brand')
var model= prompt('enter model')
var color= prompt('enter color') 
*/

root.render(
  //<App />
  //greet(user)
  //<Car/>
  //<Student rno={rno} name={name} cls={cls}/>
  //<Assignment />
  //<Suv brand={brand} model={model} color={color}/>
  //<ColoredCar  brand={brand} model={model} color={color}/>
  //<CarMount/>
  //<CarUpdate/>
  //<Container/>
  //<ButtonApp/>
  //<FetchData/>
  //<EventButton/>
  //<Formsubmission/>
  //<Validation/>
  <InsertForm/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
