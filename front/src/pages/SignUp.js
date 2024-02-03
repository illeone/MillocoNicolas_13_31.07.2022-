import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { register } from '../features/auth/asyncThunkService';
import Loader from '../Components/Loader';
import NavBar from '../Components/NavBar';
import SubmitButton from '../Components/SubmitBoutton';

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

    useEffect(() => {
        if (auth?.userInfos?.body?._id) {
            navigate("/sign-in");
        }
    }, [auth.userInfos]);

    return ( 
        <div>

            <NavBar authType="signin" />
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
                            <label htmlFor="lastname">Last name</label>
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
                        
                        <SubmitButton text="Sign Up" />

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