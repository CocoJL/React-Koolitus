import "./sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarImg' src='/assets/images/me.jpg' alt='human' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. a?</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Cinema</li>
          <li className='sidebarListItem'>Tech</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fa-brands fa-square-reddit'></i>
          <i className='sidebarIcon fa-brands fa-x-twitter'></i>
          <i className='sidebarIcon fa-brands fa-discord'></i>
          <i className='sidebarIcon fa-brands fa-stack-overflow'></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
