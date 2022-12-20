import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDataValue } from '../CardsData/DataProvider';
import './Addres.css'

const Address = () => {

  const navigate= useNavigate();

  const [name,setName]=useState("");
  const [mobile,setMobile]=useState("");
  const [house,setHouse]=useState("");
  const [colony,setColony]=useState("");
  const [landmark,setLandmark]=useState("");
  const [city,setCity]=useState("");
  const [province,setProvince]=useState("");

  const {myReducer} = useDataValue();
    const [,dispatch]= myReducer;

  const deliver =(e)=>{
         e.preventDefault()
         dispatch({
          type:'SET_ADDRESS',
          item:{
            name,
            mobile,
            house,
            colony,
            landmark,
            city,
            province,
          }
         })
       navigate('/checkout/payment');
        
  }
  return (
    
    <div className='address'>
      
      <div className='container_address'>
        <label>Full Name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <label>Phone Number</label>
        <input type='number' value={mobile} onChange={(e)=>setMobile(e.target.value)}/><br/><br/>
        <label>Flat House no. Building</label>
        <input type='text' value={house} onChange={(e)=>setHouse(e.target.value)} /><br/><br/>
        <label>Area/Colony</label>
        <input type='text' value={colony} onChange={(e)=>setColony(e.target.value)}/><br/><br/>
        <label>Landmark</label>
        <input type='text' value={landmark} onChange={(e)=>setLandmark(e.target.value)}/><br/><br/>
        <label>Town/City</label>
        <input type='text' value={city} onChange={(e)=>setCity(e.target.value)}/><br/><br/>
        <label>State/Province</label>
        <input type='text' value={province} onChange={(e)=>setProvince(e.target.value)}/><br/><br/>
        <button onClick={deliver}>Deliver to this Address</button>
       
      </div>
    </div>
   
    
  )
}

export default Address
