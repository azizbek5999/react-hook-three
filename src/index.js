import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContext } from './context/ThemeContext';
export const ThemeContent = createContext(null)

ReactDOM.render(
  <ThemeContent.Provider value={"Azizbek"}>
    <App />
  </ThemeContent.Provider>,
  document.getElementById('root')
);
