import React from "react";
import { useState } from "react";

function Ilmumine() {
  const [n2itaLisainfot, uuendan2itaLisainfot] = useState(false);
  return (
    <div>
      <div onClick={() => uuendan2itaLisainfot(!n2itaLisainfot)}>
        Sooduskoodi sisestamine ja makse arvutuskäik
        {n2itaLisainfot === true && <span>A</span>}
        {n2itaLisainfot === false && <span>V</span>}
      </div>
      {n2itaLisainfot === true && (
        <div>
          Tellitavad tooted ja teenused
          <br />
          Lisatud teenused <br />
          Family pakett
          <br />
          Soodustus kuni 25.03.2024 <br />
          0,00 €/kuu
          <br />
          39,65 €/kuu
          <br />
          5 vaatajakohta
          <br />
          Sisaldub paketis <br />
          Inspira +
          <br />
          Sisaldub paketis <br />
          Lastenurk
          <br />
          Sisaldub paketis <br />
          FX NOW
          <br />
          Sisaldub paketis <br />
          HBO
          <br />
          Sisaldub paketis <br />
          Videolaenutus
          <br />
          Sisaldub paketis <br />
          Salvestamine
          <br />
          Sisaldub paketis <br />
          Go3 Film / Paramount+
          <br />
          Sisaldub paketis <br />
          National Geographic keskkond
          <br />
          Sisaldub paketis
        </div>
      )}
    </div>
  );
}

export default Ilmumine;
