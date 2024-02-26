import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Kontakt() {
  const [kontaktKris, muudaKontaktKris] = useState(false);
  const [kontaktYlemiste, muudaKontaktYlemiste] = useState(false);
  const [kontaktTasku, muudaKontaktTasku] = useState(false);
  return (
    <div>
      <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
      <div>Võta meiega ühendust:</div>
      <br />

      <div onClick={() => muudaKontaktKris(!kontaktKris)}>Kristiine keskus</div>
      {kontaktKris && <div>+351231231</div>}
      <div>Endla 45</div>
      <br />

      <div onClick={() => muudaKontaktYlemiste(!kontaktYlemiste)}>Ülemiste keskus</div>
      {kontaktYlemiste && <div>+34151231</div>}
      <div>Suur-Sõjamäe 4</div>
      <br />
      <div onClick={() => muudaKontaktTasku(!kontaktTasku)}>Tasku keskus</div>
      {kontaktTasku && <div>+39312323</div>}
      <div>Turu 2</div>
      <Link to='/avaleht'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Kontakt;
