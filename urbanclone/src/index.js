import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { CartContextProvider } from "./contexts/cartContext";
import { ItemContextProvider } from "./contexts/itemContext";

 

ReactDOM.render(
  <StrictMode>
  <BrowserRouter>


  <ColorModeScript />
  <ChakraProvider>
  <ItemContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ItemContextProvider>

  </ChakraProvider>
  
  </BrowserRouter>
  </StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
