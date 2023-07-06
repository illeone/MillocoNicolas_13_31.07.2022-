import BankLogo from '../assets/argentBankLogo.png';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { register } from '../features/auth/authSlice';
import Loader from '../Components/Loader';

function SignUp() {

    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signUpHandler = (e) =>{
        const data = {
            "email": email,
            "password": password,
            "firstName": firstname,
            "lastName": lastname 
        }
        e.preventDefault()
        dispatch(register(data))  
    }

    if (auth?.userInfos?.body?._id) {
        console.log("user")
        return <Navigate to= "/sign-in"/>;
        
      }

    return ( 
        <div>

            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img
                    className="main-nav-logo-image"
                    src={BankLogo}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign Up</h1>
                    {auth.isLoading !== false ? <Loader /> : null}
                    {auth.message !== "" ? <p className="message-error">{auth.message} </p> : null}
                    <form onSubmit={signUpHandler}>
                    <div className="input-wrapper">
                            <label htmlFor="username">First name</label>
                            <input type="text" id="username" value={firstname} onChange ={e => setFirstname(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Last name</label>
                            <input type="text" id="lastname" value={lastname} onChange ={e => setLastname(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">email</label>
                            <input type="email" id="email" value={email} onChange ={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange ={e => setPassword(e.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>                                                  
                        </div>
                        
                        <input className="sign-in-button" type = "submit" />

                    </form>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>

        </div>
        
     );
}

export default SignUp;