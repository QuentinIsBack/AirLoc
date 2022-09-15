import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
); 