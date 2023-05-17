import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRouter from './Components/Navbar/AllRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRouter />
    </div>
  );
}

export default App;
