import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

// Import Components:
import { App } from './components/';

// Import Assets Files:
import './scss/index.scss';

const $nodeElement = document.querySelector('#root');

const aplication = (
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

ReactDOM.render(aplication, $nodeElement)
