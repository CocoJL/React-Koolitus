import React from "react";
import { Link } from "react-router-dom";

function Meist() {
  return (
    <div>
      <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
      <div>Meie töötajad:</div>
      <br />
      <div>Arvo Pärt</div>
      <div>+31312312</div>
      <div>Uudisklippide taustamuusika</div>
      <br />
      <div>Kelly Sildaru</div>
      <div>+313124123</div>
      <div>Püstolreporter</div>
      <br />
      <div>Edward von Lõngus</div>
      <div>+3131231231</div>
      <div>Uudiste kujundamine</div>
      <br />
      <div>Kerli Kõiv</div>
      <div>+312312312</div>
      <div>Välisturgude spetsialist</div>
      <Link to='/avaleht'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Meist;
