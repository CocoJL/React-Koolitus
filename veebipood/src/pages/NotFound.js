import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <div>NotFound</div>
      <img
        src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/Error-404-on-Mozilla-Firefox.webp'
        alt='not found'
      />
      <Link to='/avaleht'>
        <button>Avalehele</button>
      </Link>
    </div>
  );
}

export default NotFound;
