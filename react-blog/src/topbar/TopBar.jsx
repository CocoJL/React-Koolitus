import "./topbar.css";

function TopBar() {
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
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImg' src='/assets/images/turtle.jpg' alt='turtle' />
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
}

export default TopBar;
