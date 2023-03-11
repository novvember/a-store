import React from 'react';
import { Provider } from 'react-redux';
import App from './components/app/App';
import { store } from './store';
import '@csstools/normalize.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

const container = document.getElementById('root')!;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  container,
);
