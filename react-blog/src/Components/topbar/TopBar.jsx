import "./topbar.css";
import { Link } from "react-router-dom";
function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fa-brands fa-square-reddit'></i>
        <i className='topIcon fa-brands fa-x-twitter'></i>
        <i className='topIcon fa-brands fa-discord'></i>
        <i className='topIcon fa-brands fa-stack-overflow'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/home'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/home'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/home'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          <li className='topListItem'>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img className='topImg' src='/assets/images/turtle.jpg' alt='turtle' />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
}

export default TopBar;
