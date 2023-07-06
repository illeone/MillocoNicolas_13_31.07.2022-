import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { login } from '../features/auth/authSlice';
import BankLogo from '../assets/argentBankLogo.png';
import Loader from '../Components/Loader';

function SignIn() {
 
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const navigate = useNavigate()

    const loginHandler = (e) =>{
        const data = {
            "email": email,
            "password": password
        }
        e.preventDefault()
        dispatch(login(data))  
    }

    useEffect(() => {
        if (auth?.user) {
            return navigate('/user')
        }
    },[auth.user])

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
                    <h1>Sign In</h1>
                    {auth.isLoading && <Loader /> }
                    <form onSubmit={loginHandler}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={email} onChange ={e => setEmail(e.target.value)} />
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

                    <NavLink to="/sign-up">
                        Sign-up
                    </NavLink>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>

        </div>
        
     );
}

export default SignIn;