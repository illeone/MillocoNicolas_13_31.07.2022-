import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos } from '../features/auth/authSlice';
import { useEffect, useState } from 'react';
import Form from '../Components/Form';
import NavBar from '../Components/NavBar';
import { useNavigate } from 'react-router-dom';

function User () {

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      const token = (auth.user.body.token)
      dispatch(getUserInfos(token))
    } else {
      navigate('/sign-in');
    }
  },[auth.user])

  const [show, setShow] = useState(false);

  return (

  <div>
    <NavBar />
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{auth?.userInfos?.body?.firstName} {auth?.userInfos?.body?.lastName}</h1>
        { show ? <Form setShow={setShow} /> : <button className="edit-button" onClick={() => setShow(true)}>Edit Name</button> }
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
  </div>
      );
}

export default User;