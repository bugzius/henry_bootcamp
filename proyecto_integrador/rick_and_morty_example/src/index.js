import React from 'react'
import ReactDOM from 'react-dom/client'
import * as ReactRouter from 'react-router-dom';

import './index.css';

import {App} from './App.jsx'
import { NavMenu } from './components/navComponent/navList';
import { Footer } from './components/Footer/Footer.jsx';
import { Provider } from 'react-redux';

import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactRouter.BrowserRouter>
        <NavMenu />
        <App />
        <Footer />
      </ReactRouter.BrowserRouter>
    </Provider>
  </React.StrictMode>
)
