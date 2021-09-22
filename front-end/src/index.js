import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './Stateprovider';
import reducer, { initialState } from './Reducer';
import Showproducts from './components/Showproducts';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    

    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
