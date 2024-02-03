import { NavLink, useNavigate } from 'react-router-dom';
import BankLogo from '../assets/argentBankLogo.png';

import { useDispatch, useSelector } from "react-redux";
import { logout } from '../features/auth/asyncThunkService';


function NavBar({authType}) {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(logout())
        navigate('/sign-in');
    };

    return ( 
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={BankLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {auth.user ? 
                <div>
                    <a className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {auth?.userInfos?.body?.firstName}
                    </a>
                    <span className="main-nav-item"  onClick={handleLogOut}>
                        <i className="fa fa-sign-out"></i>
                        Log Out
                    </span>
                </div>
            :
                <div>
                    {
                        authType === 'signup' ?
                        <NavLink to="/sign-up" className="main-nav-item">
                            <i className="fa fa-user-plus"></i>
                            Sign Up
                        </NavLink>
                        :
                        <NavLink to="/sign-in" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    }
                </div>
            }
        </nav>
     );
}

export default NavBar ;
