import React, { useState } from 'react'
import './CreateAccount.css'
import arrow from '../Header/arrow.png'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDataValue } from '../CardsData/DataProvider.js'
import Footer from '../Footer/Footer';


const CreateAccount = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const auth = getAuth();
    const navigate = useNavigate()

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, confirmPassword).then((auth) => {
            if ((password === confirmPassword) && password !== " " && confirmPassword !== ' ') {
                if (auth)
                    navigate('/login')
            }
        }).catch(error => alert(error.message));
    }



    return (
        <>
            <div className='container'>

                <div className='amazon_title'>
                    <span className='logo_name'>amazon</span>
                    <span ><img src={arrow} alt='amazon_logo' className='logo_img' /></span>
                </div>

                <div className='create_login'>
                    <h2>Sign-in</h2>
                    <div className='inpud_details'>

                        <label >E-mail</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                        <label >Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />

                        <label >Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />

                        <button onClick={signUp} className="sign_btn">Create Your Amazon Account</button><br />
                        <p>Already have an Account? <span onClick={() => navigate('/login')}>login</span></p><br />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CreateAccount
