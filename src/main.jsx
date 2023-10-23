import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';

export const Estilo =createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
  }

  &:root{
    --Brown: #44281D;
    --Blue_Rick: #160440;
    --Yelow_Rick: #FCE46D;
    --Yelow_Rick_Hover: #dcc035;
    --Red_Rick: #A1140A;
    --Red_Rick_Hover: #fd4639;
    --Darkness_Rick: #333333;
    --Green_Border_Rick: #08C95288;
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Estilo />
    <App />
  </React.StrictMode>,
)
