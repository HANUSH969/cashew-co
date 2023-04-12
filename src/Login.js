import React from 'react'
import {useState} from 'react'
export function Login(props){

  return(
    <div className="mainContainer">
    <div className="containerHeading">
    <p>CASHEWCO</p>
    </div>
    <div className="loginDetailsContainer">
    <input type="text" name="user" id="userName" placeholder="Email" value={props.userName} onChange={props.handleUsernameChange}/>
    <input type="password" name="pass" id="password" placeholder="Password" value={props.passWord} onChange={props.handlePasswordChange}/>
    </div>
    <div className="loginButtonContainer">
    <button onClick={props.handleSubmit}>Login</button>
    </div>
    <div className="signupContainer">
    <p>New USer <a href="#">Sign Up</a></p>
    </div>
    </div>
  )

}
