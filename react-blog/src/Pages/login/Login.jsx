import TopBar from "../../topbar/TopBar";
import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <TopBar />
      <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
          <label>Email</label>
          <input type='text' className='loginInput' placeholder='Enter your email!' />
          <label>Password</label>
          <input className='loginInput' type='password' placeholder='Enter your password!' />
          <button className='loginButton'>Sign in</button>
        </form>
        <button className='loginRegisterButton'>
          <Link className='link' to='/register'>
            Register
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
