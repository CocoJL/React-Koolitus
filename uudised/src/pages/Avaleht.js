import React from "react";
import { Link } from "react-router-dom";

function Avaleht() {
  return (
    <div>
      <Link to='uudised'>
        <button>Uudiste lehele</button>
      </Link>
      <Link to='/kontakt'>
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to='/meist'>
        <button>Info meist</button>
      </Link>
      <h1>See on avaleht, nähtav localhost:3000 aadressil</h1>
      <img
        src='https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg'
        alt='bg'
      />
    </div>
  );
}

export default Avaleht;
