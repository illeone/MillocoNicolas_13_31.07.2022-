import BankLogo from '../assets/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

function SignUp() {

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
                    <form autocomplete="off">
                        <div className="input-wrapper">
                            <label htmlFor="username">First name</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Last name</label>
                            <input type="text" id="lastname" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
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