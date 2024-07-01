import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './Menu';
import Cabecera from './Cabecera';
import Articulos from './Articulos';
import BannerPrincipal from './BannerPrincipal';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('raiz'));
root.render(
  <React.StrictMode>
    <div className="container">
        <Cabecera /> 
        <Menu /> 
    </div>
    <main className="container">
        <BannerPrincipal />
    <div class="row mb-2">
        <Articulos />
    </div>
    </main>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
