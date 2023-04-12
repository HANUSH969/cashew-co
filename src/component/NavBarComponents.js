import React from 'react'
import cashewnuts from './cashewnuts2.jpg';
import {Link} from 'react-router-dom';
import {UserContext} from '../Contexts/UserContext.js'
import {useContext} from 'react'
export function NavBar(props){
  return(
        <div className="navBar">
  <NavLinks />
<NavLogin /></div>
  );
}

function NavLinks(props){
  return(
    <>

  <div className="navBarTitle">
    <p>CASHEWCO</p>
  </div>
  <div className="navBarItems">
    <ul className="list">
      <li className="listItem"><Link to="/home">Home</Link></li>
      <li className="listItem"><Link to="/products">Products</Link></li>
      <li className="listItem"><Link to="/contact">Contact Us</Link></li>
    </ul>
  </div>
</>
  );
}

export function Maincontent(props){
  return(
    <div className="mainContentContainer">
    <div className="leftdata">
    <div className="content">
    <div id="quote">
    <p >The humble cashew nut may be small in size but it packs a big nutrional punch</p>
    </div>
    <div id="self">
    <p >Explore our wide range of nutrional cashews on the Go.</p>
    </div>
    <div  id="shopNow">
    <button><Link to="/products">Shop Now</Link></button>
    </div>
    </div>
    </div>
    <div className="rightdata">
    <div id="homepageImg">
    <img id="img" src={cashewnuts} alt="cashewnuts"  style={{}}/>
    </div>
    </div>
    </div>
  )
}

function NavLogin(props){
  const user = useContext(UserContext);
  return(
    <div className="navLogin">
    <Link to="/login" id="navLogin">{user}</Link>
    <Link to ="/cart" id="navSignup">Cart</Link>
    </div>
  )
}
