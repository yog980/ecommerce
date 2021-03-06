import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import Axios from 'axios'
Axios.defaults.baseURL="http://127.0.0.1:5000";

function App() {

  const userSignin = useSelector(state=>state.userSignin); 
  const {userInfo} = userSignin;
  const openMenu =  () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="brand-button" onClick={openMenu}>
              &#9776;
            </button>
            <Link to='/'>CITY Shop</Link>
         
          </div>
          <div className="header-links">
          <a href="cart.html">Cart</a>
            
            {
              userInfo ? <Link to="/profile">{ userInfo.name}</Link>:
              <Link to ="/signin">Sign In</Link>
            }
          
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
            <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
              </li>
              <li>
                <a href="index.html">Shoes</a>
                </li>

          </ul>
        </aside>
       
           <main className="main">
            <div className="content">
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
             
            </div>
            
           </main>
           <footer className="footer">
           All Right Reserved.
           </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
