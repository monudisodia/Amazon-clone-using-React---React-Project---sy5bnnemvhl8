import React from 'react'
import ShoppingListCard from './ShoppingListCard.js'
import './ShoppingBasket.css'
import { useDataValue } from '../CardsData/DataProvider'
import Footer from '../Footer/Footer'

const ShoppingBasket = () => {

  const {myReducer} = useDataValue();

  const[state,] = myReducer;
  return (
   <>
    <div className='shopping_basket'>
        <h2>Your Cart</h2>
        <hr/>
        <div className='display_card'>
        {state.cartList.map((item,index)=><ShoppingListCard key={index} {...item}/>)}
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default ShoppingBasket
