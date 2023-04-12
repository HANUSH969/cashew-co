import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Login} from './Login.js'
import {App} from './App.js'
import {Maincontent} from './component/NavBarComponents.js'
import {Products} from './component/Products.js'
import {ErrorPage} from './component/Error.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {UserContext} from './Contexts/UserContext.js'
import Cart  from './component/Cart.js'
const router = createBrowserRouter([{
  path:"/",
  element:<App />,
  errorElement:<ErrorPage />,
  children:[
    {
      path:"/home",
      element:<Maincontent />
    },
    {
      path:"/products",
      element:<Products />
    },
    {
      path:"/cart",
      element:<Cart />
    }
  ]
}]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);
