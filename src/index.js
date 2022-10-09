import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

import './index.css';
import App from './App';
import { RankContextProvider } from './context/RankContext';

ReactDOM.render(
  <BrowserRouter>
      <UserContextProvider>
        <RankContextProvider>
          <App />
        </RankContextProvider>
      </UserContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
); 