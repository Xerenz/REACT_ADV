import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// webpack -> css-loader and styleloader ==> similar to ts-loader <style></style>
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
