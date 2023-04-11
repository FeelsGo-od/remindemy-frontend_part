import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <LoggedContent /> */}
      <div className='content'>You need to sign-in or sign-up to use this app</div>
    </div>
  );
}

export default App;
