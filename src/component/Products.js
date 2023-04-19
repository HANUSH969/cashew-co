import React from 'react'
import GarlicAndHerb from './GarlicAndHerb.webp'
import {useState} from 'react'
const cashewNutKernels = [
  {
    id: 1,
    name: 'Whole Raw Cashews',
    shortdescription:'Unroasted and unsalted cashew nut kernels',
    description: 'Whole, unroasted, and unsalted cashew nut kernels with a rich and buttery flavor.',
    cost: 7.99,
    imageurl: 'https://www.pngplay.com/wp-content/uploads/6/White-Cashew-PNG.png',
    type:['raw']
  },
  {
    id: 2,
    name: 'Roasted Salted Cashews',
    shortdescription:'Roasted and lightly salted cashew nut kernels',
    description: 'Roasted and lightly salted cashew nut kernels with a crunchy texture and savory flavor.',
    cost: 8.99,
    imageurl: 'https://www.kindpng.com/picc/m/774-7742394_roasted…ashew-png-pic-roasted-cashew-nuts-transparent.png',
    type:['roasted']
  },
  {
    id: 3,
    name: 'Honey Roasted Cashews',
    shortdescription:'Roasted cashew nut kernels coated in sweet honey glaze',
    description: 'Roasted cashew nut kernels coated in sweet honey glaze for a delicious and satisfying snack.',
    cost: 9.99,
    imageurl: 'https://www.kindpng.com/picc/m/745-7451817_roasted-cashew-png-transparent-background-candy-png-download.png',
    type:['roasted','glazed']
  },

  {
    id: 5,
    name: 'Dark Chocolate Covered Cashews',
    shortdescription:'Roasted cashew nut kernels coated in rich dark chocolate',
    description: 'Roasted cashew nut kernels coated in rich and indulgent dark chocolate for a sweet treat.',
    cost: 11.99,
    imageurl: 'https://cdn.imgbin.com/20/15/18/imgbin-chocolate-coated-peanut-white-chocolate-salty-liquorice-macaroon-chocolate-y91LPXSxRueq8ycpSiVe1ZPp4.jpg',
    type:['glazed']
  },
  {
    id: 7,
    name: 'Spicy Roasted Cashews',
    shortdescription:"Roasted cashew nut kernels seasoned with spicy spices",
    description: 'Roasted cashew nut kernels seasoned with spicy spices for a fiery kick.',
    cost: 9.99,
    imageurl: 'https://crunchykart.in/wp-content/uploads/2022/08/masala-cashew-removebg-preview.png',
    type:['roasted']
  },
  {
    id: 8,
    name: 'Salted Cashew Pieces',
    shortdescription:"Roasted and salted cashew nut kernels in smaller pieces",
    description: 'Roasted and salted cashew nut kernels that have been broken into smaller pieces for snacking and cooking.',
    cost: 7.99,
    imageurl: 'https://www.seekpng.com/png/detail/65-658452_cashews-salted-cashew-nuts.png',
    type:['salted']
  },
  {
    id: 9,
    name: 'Garlic Roasted Cashews',
    shortdescription:"Roasted cashew nut kernels seasoned with savory garlic for a bold and flavorful snack.",
    description: 'Roasted cashew nut kernels seasoned with savory garlic for a bold and flavorful snack.',
    cost: 10.99,
    imageurl: GarlicAndHerb,
    type:['roasted']
  },
  {
    id: 10,
    name: 'Raw Cashew Halves',
    shortdescription:"unsalted and unroasted cashew nut kernals in Halves",
    description: 'Unroasted and unsalted cashew nut kernels that have been halved for easy snacking and cooking.',
    cost: 6.99,
    imageurl: 'https://www.pngitem.com/pimgs/m/128-1287159_transparent-cashew-nut-png-cashew-nuts-split-png.png',
    type:['raw']
  }
];

function Filter(props){
  return(
    <div className="filterContainer">
    <label htmlFor="filter">Filter By: </label>
    <select value={props.value} onChange={props.change} name="filter" id="filter">
    <option name="type" value="type">Type</option>
    <option name="raw" value="raw">Raw</option>
    <option name="roasted" value="roasted">Roasted</option>
    <option name="glazed" value="glazed">Glazed</option>
    <option name="salted" value="salted">Salted</option>
    </select>
    </div>
  );

}

export function Products(props){
  const [filter, setFilter] = useState('')
  const newArray=cashewNutKernels.filter((x)=>{return x.type.includes(filter)})
  console.log(newArray)
  function changeState(e){
    setFilter(e.target.value);
  }
  return (
    <>
    {
    console.log("rendered products")
    }
    <Filter value={filter} change={changeState}/>
    <div className="products">
    {filter==='' || filter==="type" ?cashewNutKernels.map((product) =>{ return <Product name={product.name} cost={product.cost} key={product.id} imageurl={product.imageurl} description={product.shortdescription}/>}):
  newArray.map((product) =>{ return <Product name={product.name} cost={product.cost} key={product.id} imageurl={product.imageurl} description={product.shortdescription}/>})}
    </div>
    </>
  )
}
function Product(props){


  function handleClick(e){
      const selectedProducts=localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[];
    e.preventDefault();
    selectedProducts.push({url:props.imageurl,price:props.cost})
    localStorage.setItem('cart',JSON.stringify(selectedProducts));
  }
  return(
    <div className="productContainer">
  <div className="productImage">
  <img alt="productImage" src={props.imageurl} className="Image"/>
  </div>
  <div className="productDescription">
  <div className="namePrice">
  <div>
      <p>{props.name}</p>
      </div>
      <div>
      <p>{props.cost}</p>
      </div>
    </div>
    <div className="cartdis">
      <p></p>
    <button className="addCartButton" onClick={handleClick}>Add to cart</button>
    </div>
  </div>
</div>
  );
}
