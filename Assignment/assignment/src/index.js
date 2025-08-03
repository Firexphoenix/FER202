// ✅ Sử dụng createRoot cho React 18 trở lên
import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- đúng thư viện
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
