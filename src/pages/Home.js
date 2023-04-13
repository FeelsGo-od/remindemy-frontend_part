import React from 'react';

import Profile from '../features/users/Profile';

function Home () {
  const userData = JSON.parse(localStorage.getItem('user'))

  return (
    <div>
      {userData ? 
        <Profile id='643726341186ab2b9fd5039b' />
      : 
        <div className='content'>You need to <a href='/login'>sign-in</a> or <a href='register'>sign-up</a> to use this app</div>
      }
    </div>
  );
}

export default Home;
