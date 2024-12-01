import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/animations/animate.css'; // Your global CSS
import 'font-awesome/css/font-awesome.min.css';
import './css/menu.css'
// import './assets/revolution_slider/css/revslider.css'
import './revolution_slider/css/revslider.css'
import './css/responsive.css'
import './css/style.css'
// import 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';

// import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// window.jQuery = $;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
