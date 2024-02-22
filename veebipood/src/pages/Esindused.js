import React from "react";
import { Link } from "react-router-dom";

function Esindused() {
  return (
    <div>
      <div>Esindused</div>
      <div>
        Tallinn (7)
        <div>Ülemiste</div>
        <div>Viimsi</div>
        <div>Roccal Al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
      </div>
      <div>
        Tartu (2)
        <div>Järveotsa</div>
        <div>Raatuse</div>
      </div>
      <div>
        Narva (1)
        <div>Fama</div>
      </div>
      <div>
        Pärnu (1)
        <div>Port Artur 2</div>
      </div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Esindused;
