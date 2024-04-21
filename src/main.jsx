import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header/Navbar'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)