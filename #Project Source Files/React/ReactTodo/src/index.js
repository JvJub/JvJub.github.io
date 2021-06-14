// Imports:
import React from 'react';
import ReactDOM from 'react-dom';

// Imports React Components:
import App from './components/App/App';

const $node = document.querySelector('#root');

const application = <App /> ; // jshint ignore:line

ReactDOM.render(
  application,
  $node
);
