import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { login } from '../features/auth/asyncThunkService';

import Loader from '../Components/Loader';
import NavBar from '../Components/NavBar';
import SubmitButton from '../Components/SubmitBoutton';
import Footer from '../Components/Footer';

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
            navigate('/user')
        }
    },[auth.user])

    return ( 
        <div className="page-signin">
            <NavBar authType="signup" />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    {auth.isLoading && <Loader /> }
                    {auth.message !== "" ? <p className="message-error">{auth.message} </p> : null}
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
                        
                        <SubmitButton text="Sign In" />
                    </form>
                </section>
            </main>
            <Footer />
        </div>
        
     );
}

export default SignIn;