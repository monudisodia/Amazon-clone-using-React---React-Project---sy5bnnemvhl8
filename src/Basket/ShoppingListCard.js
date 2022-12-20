import React from 'react'
import './ShoppingListCard.css'
import Rating from '../CardsData/Rating'
import { useDataValue } from '../CardsData/DataProvider'


const ShoppingListCard = (props) => {

    const {myReducer} =useDataValue();
    const [,dispatch] =myReducer;
     
    const removeItem = (id)=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            payload: id
        })
    }

  return (
    <>
        <ul className='shopping_list'>
            <li className='list'>
                <div className='img_holder'>
                    <img src={props.imgURL} alt=''/>
                </div>
                <div className='item_details'>
                    <div>{props.title}</div>
                    <p><strong>Rs.{props.price}</strong></p>
                    <div><Rating rating={props.rating}/></div>
                    <button onClick={()=>removeItem(props.id)}>Remove from Cart</button>
                </div>
            </li>

        </ul>
      
    </>
  )
}

export default ShoppingListCard
