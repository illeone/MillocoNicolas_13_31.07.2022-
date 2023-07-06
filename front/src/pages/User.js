import { NavLink, useNavigate } from 'react-router-dom';
import BankLogo from '../assets/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos, logout } from '../features/auth/authSlice';
import { useEffect, useState } from 'react';
import Form from '../Components/Form';

function User () {

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/sign-in');
  };

  useEffect(() => {
    const token = (auth.user.body.token)
    // console.log(auth.user.body.token);
  
    dispatch(getUserInfos(token))
  },[])

  const [show, setShow] = useState(false);

  return (

  <body>
    <nav className="main-nav">
      <NavLink to="/" class="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <a className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Tony
        </a>
        <NavLink to="/" className="main-nav-item" style={{ textDecoration: 'none' }} onClick={handleLogout}>
          <i className="fa fa-sign-out" ></i>
          Sign Out
        </NavLink>
      </div>
    </nav>
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{auth?.userInfos?.body?.firstName} {auth?.userInfos?.body?.lastName}</h1>
        <button className="edit-button" onClick={() => setShow(!show)}>Edit Name</button>
        { show ? <Form /> : null }
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  </body>
      );
}

export default User;