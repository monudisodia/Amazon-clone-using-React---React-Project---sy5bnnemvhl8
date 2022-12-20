import React from 'react'
import './Cards.css'
import Rating from '../CardsData/Rating'
import { useDataValue } from '../CardsData/DataProvider'

const Cards = (props) => {
    const { title, price, rating, imgURL } = props;
    const { myReducer } = useDataValue();

    const [, dispatch] = myReducer;

    const addtocart = (selectedValue) => {
        const timeSt = new Date().getTime();
        selectedValue = { ...selectedValue, id: timeSt }
        dispatch({
            type: 'ADD_TO_CART',
            payload: selectedValue
        })
    }
    return (
        <div className='cards'>


            <div className='card_content'>
                <p style={{ fontWeight: 'bold' }}>{title}</p>
                <p>{price}</p>
                <p><Rating rating={rating} /></p>
                <div className='image_holder'>
                    <img src={imgURL} alt='product_image' />
                    <button onClick={() => addtocart(props)}>Add to Cart</button>
                </div>
                
            </div>

        </div>
    )
}

export default Cards
