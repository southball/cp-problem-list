import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StateProvider from './state/state-provider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/bootstrap.min.css';

ReactDOM.render(
  (
    <StateProvider>
      <App />
    </StateProvider>
  ),
  document.getElementById('root')
);