import React from "react";
import { useState } from "react";
function Hind() {
  const [hind, uuendaHind] = useState(0);
  return (
    <div>
      <div>Hind</div>
      {hind === 0 && <div>Ära unusta toodet valida!</div>}
      <div>Valitud mälukaardiga telefoni hind on: {hind}.</div>
      <button className={hind === 37 ? "aktiivne" : "hind"} onClick={() => uuendaHind(37)}>
        32GB Mälukaart
      </button>
      <button className={hind === 50 ? "aktiivne" : "hind"} onClick={() => uuendaHind(50)}>
        64GB Mälukaart
      </button>
      <button className={hind === 80 ? "aktiivne" : "hind"} onClick={() => uuendaHind(80)}>
        96GB Mälukaart
      </button>
      <button className={hind === 120 ? "aktiivne" : "hind"} onClick={() => uuendaHind(120)}>
        128GB Mälukaart
      </button>
      <button className={hind === 157 ? "aktiivne" : "hind"} onClick={() => uuendaHind(157)}>
        320GB Mälukaart
      </button>
      <button className={hind === 197 ? "aktiivne" : "hind"} onClick={() => uuendaHind(197)}>
        1TB Mälukaart
      </button>
    </div>
  );
}

export default Hind;
