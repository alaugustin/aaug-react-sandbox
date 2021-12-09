import React from 'react';
import ReactDOM from 'react-dom';
import Hooks from './components/Hooks';
import Props from './components/Props';
import UseEffect from './components/UseEffect';
import UseState from './components/UseState';
import reportWebVitals from './reportWebVitals';

import './index.css';

const mainHeading = "Hooks, Props, useState and useEffect";
const hooksData = {
  heading2:["What are Hooks?", "React Lifecycle"],
  reactLifecycle: ["mounting", "updating", "unmounting"]
};
const propsData = {
  heading2:"What are Props?",
};
const UseStateData = {
  heading2: "useState",
  heading3: "What is useState?",
  buttonLabel: "useState Click me",
};
const UseEffectData = {
  heading2: "useEffect",
  heading3: "What is useEffect?",
  buttonLabel: "useEffect Click me",
};

ReactDOM.render(
  <React.StrictMode>
    <Hooks heading1 = {mainHeading} hooksH2 = {hooksData.heading2} listData={hooksData.reactLifecycle}/>
    <Props propsH2 = {propsData.heading2} name = "Encarnacion" />
    <UseState useStateH2={UseStateData.heading2} useStateH3={UseStateData.heading3} buttonLabel={UseStateData.buttonLabel}/>
    <UseEffect useEffectH2={UseEffectData.heading2} useEffectH3={UseEffectData.heading3} buttonLabel={UseEffectData.buttonLabel}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
