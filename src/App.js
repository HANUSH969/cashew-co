import React from 'react'
import {useState,useRef} from 'react'
import {NavBar, Maincontent} from './component/NavBarComponents'
import {Products} from './component/Products.js'
import {Login} from './Login.js'
import {Outlet} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {UserContext} from './Contexts/UserContext.js'

export function App(props){
  const isLoggedIn = useRef(false);
  const [userName, setUsername] = useState('');
  const [passWord, setPassword] = useState('');
  const navigate = useNavigate();
  function handleUsernameChange(e){
    e.preventDefault();
    setUsername(e.target.value);
  }
  function handlePasswordChange(e){
    e.preventDefault();
    setPassword(e.target.value);
  }
  async function handleSubmit(e){
  e.preventDefault()
  let response = await fetch("http://localhost:8000/auth",{
    method:"POST",
    credentials:'include',
    redirect:'follow',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({username:userName, password:passWord})
  })
  if(response.status===200){
    localStorage.setItem("user",userName);
    isLoggedIn.current = true;
  navigate("/home")
  }

  }
  return(
      <UserContext.Provider value={localStorage.getItem("user")}>
    <>
    {!isLoggedIn.current ?
  (<Login userName={userName} passWord={passWord} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleSubmit={handleSubmit}/>):
  (<><NavBar />
  <Outlet /></>)}
    </>
      </UserContext.Provider>

  )
}
