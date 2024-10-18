import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/scss/themes.scss";
import Aux from './hoc/Auxilliary/Auxilliary';

// router
import { BrowserRouter } from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux';





const root = ReactDOM.createRoot(document.getElementById('root'));
// Initialize Firebase
root.render(
  <Aux>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </Aux>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
