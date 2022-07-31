import { NavLink } from 'react-router-dom';
import BankLogo from '../assets/argentBankLogo.png';

function User () {

    return (

  <body>
    <nav class="main-nav">
      <NavLink to="/" class="main-nav-logo">
        <img
          class="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <a class="main-nav-item">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <NavLink to="/" class="main-nav-item" style={{ textDecoration: 'none' }}>
          <i class="fa fa-sign-out" ></i>
          Sign Out
        </NavLink>
      </div>
    </nav>
    <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Checking (x8349)</h3>
          <p class="account-amount">$2,082.79</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Savings (x6712)</h3>
          <p class="account-amount">$10,928.42</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
          <p class="account-amount">$184.30</p>
          <p class="account-amount-description">Current Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    <footer class="footer">
      <p class="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  </body>
      );
}

export default User;