import './App.css';
import Banner from './Banner/Banner';
import Checkout from './Basket/Checkout';
import ShoppingBasket from './Basket/ShoppingBasket';
import Header from './Header/Header';
import ProductList from './Products/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react';
import Login from './Login/Login.js';
import Address from './Payment/Address.js';
import Payment from './Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './Payment/OrderSuccess';
import CreateAccount from './Login/CreateAccount';
import Footer from './Footer/Footer';

const promise = loadStripe(
  'pk_test_51MCbukSBu6hpYFcYZAfXZIIltG7nBiUJHoOuvQcsuID6hosL5J9sM63VD38G4IIq3gI3xlygqYm0XRWkrUSNLlvd00yEdQK8LQ'
)
function App() {
  return (
    <div className="App">


      <Router>
        <Header />
        <Routes >
          <Route exact path='/' element={
            <React.Fragment>
              <Banner />
              <ProductList />
              
            </React.Fragment>
          } />

          <Route exact path='/login' element={
            <React.Fragment>
              <Login />
            </React.Fragment>
          } />

          <Route exact path='/createAccount' element={
            <React.Fragment>
              <CreateAccount />
            </React.Fragment>
          } />

          <Route exact path='/checkout' element={
            <React.Fragment>
              <Checkout />
              <ShoppingBasket />
            </React.Fragment>
          } />
          <Route exact path='/checkout/payment' element={
            <React.Fragment>
              <Elements stripe={promise}><Payment /></Elements>
            </React.Fragment>
          } />
          <Route exact path='/checkout/ordersuccess' element={
            <React.Fragment>
              <OrderSuccess />
            </React.Fragment>
          } />
        </Routes>
        
      </Router>

    </div>
  );
}

export default App;

