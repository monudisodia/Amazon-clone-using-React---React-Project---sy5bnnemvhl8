import React, { useState } from 'react'
import arrow from '../Header/arrow.png'
import './Login.css'
import { firebaseConfig } from './Firebase.js'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDataValue } from '../CardsData/DataProvider.js'
import Footer from '../Footer/Footer';

const Login = () => {


    const app = initializeApp(firebaseConfig);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const auth = getAuth();
    const navigate = useNavigate()

    const { myReducer } = useDataValue();
    const [, dispatch] = myReducer;
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((auth) => {
            if (auth) {
                dispatch({
                    type: 'SIGN_IN',
                    payload: auth
                })
                navigate('/')
            }
        }).catch(error => alert(error.message));
    }

    const signUp = (e) => {

        navigate('/createAccount')
    }
    return (
        <>
            <div className='container'>

                <div className='amazon_title'>
                    <span className='logo_name'>amazon</span>
                    <span ><img src={arrow} alt='amazon_logo' className='logo_img' /></span>
                </div>

                <div className='login'>
                    <h2>Sign-in</h2>
                    <div className='inpud_details'>

                        <label >E-mail</label><br />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                        <label >Password</label><br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                        <button className='sign_btn' onClick={signIn}>Sign in</button><br />
                        <p>By Signing in you agree to the AMAZON FAKE CLONE Condition of use and sale.
                            Please see our Privacy Notice,or our Cookies notices and our interest-based ads notice.</p><br />

                        <button onClick={signUp}>Create Your Amazon Account</button><br />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;
