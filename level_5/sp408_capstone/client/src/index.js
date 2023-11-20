import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BillContextProvider } from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BillContextProvider>
      <App />
    </BillContextProvider>
  </React.StrictMode>
);
