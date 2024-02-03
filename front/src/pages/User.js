import { useDispatch, useSelector } from 'react-redux';
import { getUserInfos } from '../features/auth/asyncThunkService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../Components/Form';
import NavBar from '../Components/NavBar';
import Account from '../Components/Account';

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
        <h1 className="text-welcome">Welcome back<br />{auth?.userInfos?.body?.firstName} {auth?.userInfos?.body?.lastName}</h1>
        { show ? <Form setShow={setShow} /> : <button className="edit-button" onClick={() => setShow(true)}>Edit Name</button> }
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  </div>
      );
}

export default User;