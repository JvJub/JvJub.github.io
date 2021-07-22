import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store/store';

// Import React Components:
import App from './components/App/App';

// Import Assets Files:
import './assets/scss/app.scss';

const $nodeElement = document.querySelector('#root');

const aplication = (
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

ReactDOM.render(aplication, $nodeElement);
