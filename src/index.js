import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import {AppProvider} from './components/context'
import App from './App';

ReactDOM.render( 
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

