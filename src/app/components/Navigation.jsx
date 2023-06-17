import React, { useState } from 'react';
import { UseUserContext } from '../contexts';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Navigation.scss';

const Navigation = () => {
  const { user, logIn, logOut, loginError } = UseUserContext();
  const [userNameInput, setUserNameInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    console.log(userNameInput);
    setIsLoading(true);
    logIn(userNameInput)
    // bij onbestaande nickname, terug naar lege login:
      .catch(() => {
        setUserNameInput("");
        setIsLoading(false);
      });
  };

  const handleLogout = () => {
    setIsLoading(false);
    logOut();
  };

  return (
    <div className='userinfo'>
      {user && (
        <>
          <div className={user.userName}>
            <div className='userinfo-avatar'>
              <img src={user.avatarUrl} alt="User Avatar" />
              <p>{user.userName}</p>
            </div>
            <h1>Petit List</h1>
            <button className='btn btn-light' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      )}
      {!user && (
        <>
          <input 
            type="text"
            value={userNameInput}
            onChange={(event) => setUserNameInput(event.target.value)}
            placeholder='Enter your nickname' 
          /> 
          {loginError && <p>Wrong nickname. Try again.</p>}
          {isLoading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}        
        </>
      )}
    </div>
  );
};

export default Navigation;
