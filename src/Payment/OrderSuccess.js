import React from 'react'
import ShoppingListCard from '../Basket/ShoppingListCard'
import './OrderSuccess.css'
import { useDataValue } from '../CardsData/DataProvider'
import Footer from '../Footer/Footer'

const OrderSuccess = () => {

    const { myReducer } = useDataValue();

    const [state,] = myReducer;
    return (
        <>
            <div className='order_success'>
                <div className='success_container'>
                    {/* <div className='success_payment_address'>
                    <div className='shipping'>
                        <h3>Shipping Address</h3>
                        <p>Surender Kumar </p>
                        <p>1234567890</p>
                        <p>suren@gmail.com</p>
                        <p>Bhiwani Haryana,India</p>
                    </div>
                </div> */}
                    <div><h2>Order Successful</h2><hr />
                        <div className='successful'>
                            {state.cartList.map((item, index) => <ShoppingListCard key={index} {...item} />)}
                        </div>



                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default OrderSuccess
