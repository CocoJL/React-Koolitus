import React from "react";
import { Link } from "react-router-dom";

function Seaded() {
  return (
    <div>
      <div>Seaded</div>
      <div>“Leht on eesti keelne”</div>
      <div>This page is written in english</div>
      <div>“Cтраница на русском языке”</div>
      <div>
        <button>Est</button>
        <button>Eng</button>
        <button>Rus</button>
      </div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Seaded;
