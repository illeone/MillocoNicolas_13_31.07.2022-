import { useState } from 'react';
import { NavLink } from 'react-router-dom';


import BankLogo from '../assets/argentBankLogo.png';


function SignIn() {

    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const loginHandler = (e) =>{

        e.preventDefault()
        console.log(email, password);
 
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
                <div>
                    <NavLink to="/sign-in" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    {/* <FontAwesomeIcon icon={faUserCircle} /> */}
                    <h1>Sign In</h1>

                    
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
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>

        </div>
        
     );
}

export default SignIn;