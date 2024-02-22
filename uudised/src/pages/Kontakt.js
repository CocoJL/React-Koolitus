import React from "react";
import { Link } from "react-router-dom";

function Kontakt() {
  return (
    <div>
      <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
      <div>Võta meiega ühendust:</div>
      <br />
      <div>Kristiine keskus</div>
      <div>+351231231</div>
      <div>Endla 45</div>
      <div>Ülemiste keskus</div>
      <div>+34151231</div>
      <div>Suur-Sõjamäe 4</div>
      <br />
      <div>Tasku keskus</div>
      <div>+39312323</div>
      <div>Turu 2</div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Kontakt;
