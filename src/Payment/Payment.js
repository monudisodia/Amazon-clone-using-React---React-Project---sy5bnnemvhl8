import React, { useEffect, useState } from 'react'
import ShoppingBasket from '../Basket/ShoppingBasket'
import { useDataValue } from '../CardsData/DataProvider'
import { useNavigate } from 'react-router-dom'
import './Payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Axios from './Axios'
import Footer from '../Footer/Footer'



const Payment = () => {


    const { myReducer } = useDataValue();

    const [state] = myReducer;

    const navigate = useNavigate();

    const [clientSecret,setClientSecret]= useState(true);


    const getTotal = () => {
        let total = 0;
        state.cartList.map(item => {
            return total = Number(total) + Number(item.price);
        })
        return total;
    }

    const elements= useElements();
    const stripe= useStripe();
    

    useEffect(()=>{
        const fetchClientSecret=async ()=>{
            const data= await Axios.post("/payment/create",{
                amount:getTotal(state.cartList),
            })

            setClientSecret(data.data(clientSecret))
        }

        fetchClientSecret();
        
    },[state.cartList]);


    const confirmPayment = async(e)=>{
               e.preventDefault();

            navigate('/checkout/ordersuccess');
    }

    return (
        <>
        <div className='payment'>
            <div className='payment_container'>
                <div className='payment_address'>
                    <h2>Review Your Order</h2>
                    <div className='shipping'>
                        <h3>Shipping Address</h3>
                        <p>Surender Kumar </p>
                        <p>1234567890</p>
                        <p>suren@gmail.com</p>
                        <p>Bhiwani Haryana,India</p>

                    </div>



                </div>
                <div className='payment_details'>
                    <h2>Payment Method</h2>

                    <div className='card_details'>
                        <h3>Card Details</h3>
                        <div style={{margin:'20px 50px'}}>
                        <CardElement />
                        </div>
                             
                            <p>Total(<strong>{state.cartList.length}</strong> :items): <strong>Rs.{getTotal()}</strong></p>
                            
                    </div>
                    <button onClick={confirmPayment}>Place Order</button>

                </div>
            </div>
            <div className='cart_shopping'>
                <ShoppingBasket />
            </div>



        </div>
        </>
    )
}

export default Payment
