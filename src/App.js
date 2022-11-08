import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
const App = () => {
  return (
    <div>
      <div className='main-routing'>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;