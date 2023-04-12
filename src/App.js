import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Profile from './features/users/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile id='643726341186ab2b9fd5039b' />
      <div className='content'>You need to sign-in or sign-up to use this app</div>
    </div>
  );
}

export default App;
