import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    element: <App page={'home'}/>,
  },
  {
    path: "/home",
    element: <App page={'home'}/>,
  },
  {
    path: "/agenda",
    element: <App page={'agenda'}/>,
  },
  {
    path: "/contribute",
    element: <App page={'contribute'}/>,
  },{
    path: "/rsvp",
    element: <App page={'rsvp'}/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
