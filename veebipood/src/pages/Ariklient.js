import React from "react";
import { Link } from "react-router-dom";

function Ariklient() {
  return (
    <div>
      <div>Ariklient</div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Ariklient;
