import React from 'react'; // import React package
import ReactDOM from 'react-dom'; // import ReactDOM package
import chungus from './components/chungus'; // import our frame component
import './styles/main.css'; // import our external css file

// using the render method, we will mount this node into our DOM (html file) on the element with 
// id of 'app'
ReactDOM.render( < chungus / > ,
    document.getElementById('app')
);