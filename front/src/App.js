import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/user" element={<User/>} />
          </Routes>  
        </main>           
      </Router>
    </div>
  );
}

export default App;
