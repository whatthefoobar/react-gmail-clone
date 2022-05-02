import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="ap__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
