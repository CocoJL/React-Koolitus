import React from "react";
import { Link } from "react-router-dom";

function Kinkekaart() {
  return (
    <div>
      <div>Kinkekaart</div>
      <div>
        <img
          src='https://storage.googleapis.com/arvutitark-public/static/ui/gift-1.png'
          alt='kinkekaart'
        />
        <button>-</button>
        <span>7</span>
        <button>+</button>
      </div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Kinkekaart;
