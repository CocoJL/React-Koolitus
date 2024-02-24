import "./header.css";

function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src='/assets/images/mountain.jpg' alt='mountain' />
    </div>
  );
}

export default Header;
