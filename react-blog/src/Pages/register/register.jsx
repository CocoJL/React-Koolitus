import TopBar from "../../topbar/TopBar";
import "./register.css";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div>
      <TopBar />
      <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm'>
          <label>Username</label>
          <input type='text' className='registerInput' placeholder='Enter your username!' />
          <label>Email</label>
          <input type='text' className='registerInput' placeholder='Enter your email!' />
          <label>Password</label>
          <input className='registerInput' type='password' placeholder='Enter your password!' />
          <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>
          <Link className='link' to='/login'>
            Sign in
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Register;
