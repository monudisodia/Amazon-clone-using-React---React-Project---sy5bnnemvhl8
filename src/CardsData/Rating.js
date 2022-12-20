import React from 'react'
import {FaStar} from 'react-icons/fa'


const Star= ({selected})=>{
    return(
       <FaStar color={selected?'#ff6f09':'gray'}/>
    )
}
const Rating = ({rating}) => {
  return (
      Array(5).fill().map((item,idx)=><Star key={idx} selected={rating>idx}/>)
  )
}

export default Rating
