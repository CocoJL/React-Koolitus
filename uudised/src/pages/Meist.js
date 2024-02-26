import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Meist() {
  const [kontaktArvo, n2itaKontaktArvo] = useState(false);
  const [kontaktKelly, n2itaKontaktKelly] = useState(false);
  const [kontaktEd, n2itaKontaktEd] = useState(false);
  const [kontaktKerli, n2itaKontaktKerli] = useState(false);
  return (
    <div>
      <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
      <div>Meie töötajad:</div>
      <br />
      <div>Arvo Pärt</div>
      <div>Uudisklippide taustamuusika</div>
      <button onClick={() => n2itaKontaktArvo(!kontaktArvo)}>Võta ühendust</button>
      <br />

      {kontaktArvo !== false && <div>Tema number on: {kontaktArvo && "54541010"}</div>}

      <br />

      <div>Kelly Sildaru</div>
      <div>Püstolreporter</div>
      <button onClick={() => n2itaKontaktKelly(!kontaktKelly)}>Võta ühendust</button>
      <br />
      {kontaktKelly !== false && <div>Tema number on: {kontaktKelly && "5192300"}</div>}
      <br />

      <div>Edward von Lõngus</div>
      <div>Uudiste kujundamine</div>
      <button onClick={() => n2itaKontaktEd(!kontaktEd)}>Võta ühendust</button>
      <br />
      {kontaktEd !== false && <div> Tema number on: {kontaktEd && "52019021"} </div>}
      <br />

      <div>Kerli Kõiv</div>
      <div>Välisturgude spetsialist</div>
      <button onClick={() => n2itaKontaktKerli(!kontaktKerli)}>Võta ühendust</button>
      <br />
      {kontaktKerli !== false && <div>Tema number on: {kontaktKerli && "5512309"}</div>}
      <br />

      <div>
        <Link to='/avaleht'>
          <button>Tagasi</button>
        </Link>
      </div>
    </div>
  );
}

export default Meist;
