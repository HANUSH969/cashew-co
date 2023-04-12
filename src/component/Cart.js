import React from 'react';
import {useContext} from 'react';
import {CartContext} from '../Contexts/UserContext.js'
export default function Cart(){
  let items = JSON.parse(localStorage.getItem('cart'));
  let price = items.reduce((sum,item)=>{return sum+item.price},0);

  console.log(items);
    return(
    <div class="cartContainer">

  <div class="cartSummary">
  <div id="cartHeadingContainer">
  <p id="cartHeading">Shopping Cart:</p>
  </div>
  {items.map((item)=>{return <CartItem url={item.url} price={item.price} />})}
    </div>
    <CartTotal price={price}/>
</div>
  );
}

function CartItem(props){
  const addItem = useContext(CartContext);
  return(
    <div class="cartItem">
      <div class="prodimg">
      <img id="img" src={props.url} alt="prodimag"/>
    </div>
      <div class="items">
      <p> 1</p>
    </div>
    <div class="prodprice">
      <p>{props.price}</p>
    </div>
    </div>
  );
}

function CartTotal(props){
  return (
    <div class="cartTotal">
      <div class="address">
        <p>shipping to:-</p>
        <p>neaer....</p>
      </div>
      <div class="totalbill">
        <div>
          <p>items:</p>
          <p>{props.price}</p>
        </div>
        <div>
          <p>Deliver:</p>
          <p>80</p>
        </div>
        <div>
          <p>Order Total:</p>
          <p>{(props.price+80).toFixed(2)}</p>
        </div>
      </div>
      <div class="placeorder">
        <button id="placeorder">placeorder</button>
        </div>
    </div>
  );

}
