// main.jsx (or index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store'; // ✅ Make sure this points to the store.js file

// React 18+ root rendering
ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <App />
    </Provider>
 
);
