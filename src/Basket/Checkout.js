import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataValue } from '../CardsData/DataProvider'
import bannerimg from './banner.jpg'
import './Checkout.css'


const Checkout = () => {

  const {myReducer} =useDataValue();

  const [state] =myReducer;

  const navigate = useNavigate();

  const proceedToCheckout=(e)=>{
       e.preventDefault();

       navigate('/checkout/payment');
  }

  const getTotal =()=>{
    let total=0;
    state.cartList.map(item=>{
      return total= Number(total)+Number(item.price);
    })
    return total;
  }

  return (
    <div className='checkout'>
       <div className='banner'>
           <img src={bannerimg} alt='banner_image'/>
       </div>

       <div className='checkout_details'>
            <div className='total'>
                <p>Total(<strong>{state.cartList.length}</strong> :items): <strong>Rs.{getTotal()}</strong></p>
                <p><input type="checkbox" className='checkbox'/><span>This order contains a gift</span></p>
                <button onClick={proceedToCheckout}>Proceed to Checkout</button>
            </div>
       </div>
    </div>
  )
}

export default Checkout;
