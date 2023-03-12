import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//ReactDOM - React 18^
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);

//ReactDOM 17.* less
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);