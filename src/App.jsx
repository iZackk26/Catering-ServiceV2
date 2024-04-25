import React from 'react'
import { useState } from 'react'
import Header from './components/Header/Navbar';
import Routing from './routes';

function App() {
  return (
    <div>
      <Header />
      <Routing />
    </div>
  )
}

export default App;