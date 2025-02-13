import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import ThemeToggle from './ThemeToggle';


function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);
  
  useEffect(() => {
    fetch('http://localhost:8000/profile', {
      credentials: 'include',
    }).then(response =>{
      response.json().then(userInfo => {
       setUserInfo(userInfo);

      })
    })
  }, [])

  function logout (){
    fetch('http://localhost:8000/logout', {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null);
  }
  const username = userInfo?.username;

 
  return (
    <header>
      <Link to="/" className="logo">Home</Link>
      <nav>
        <ThemeToggle /> {/* Add the ThemeToggle component */}
        {username && (
          <>
            <Link to="/create">New Article</Link>
            <a onClick={logout}>Exit</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
