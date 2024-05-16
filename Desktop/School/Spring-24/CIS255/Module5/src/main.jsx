import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Schools from './Instituition.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Rating My Schools</h1>
    <Schools name = "Saint Martins" year = "2012/13" rating = "0/10"/>
    <Schools name = "Edmonds CC" year = "2013/14" rating = "4/10"/>
    <Schools name = "Olympic" year = "2022/24" rating = "0/10"/>
  </React.StrictMode>,
)
