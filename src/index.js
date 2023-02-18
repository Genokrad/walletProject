import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
// import persistor from './redux/store';
import { Provider } from 'react-redux';

import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <BrowserRouter basename="/walletProject"> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
