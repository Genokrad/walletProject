import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/walletProject">
        {/* <BrowserRouter> */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
