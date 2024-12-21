import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './prism.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import "prismjs/components/prism-sql";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Router>
          <App />
      </Router>
  </React.StrictMode>
);

