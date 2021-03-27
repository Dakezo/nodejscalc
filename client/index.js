import React from 'react'; // import React package
import ReactDOM from 'react-dom'; // import ReactDOM package
import chungus from '/opt/calc/chungus.jsx'; // import our frame component
import '/opt/calc/client/styles/main.css'; // import our external css file
//import babel-loader from '/opt/calc/node_modules/babel-loader/lib/index.js';// import babel fuckery

// using the render method, we will mount this node into our DOM (html file) on the element with 
// id of 'app'
ReactDOM.render( < chungus / > ,
    document.getElementById('app')
);
