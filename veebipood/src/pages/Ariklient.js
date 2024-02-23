import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tutvustus from "../components/Tutvustus";
import Myyk from "../components/Myyk";
import Garantii from "../components/Garantii";

function Ariklient() {
  const [leht, muudaLeht] = useState("tutvustus");
  return (
    <div>
      <div>Ariklient</div>
      <button onClick={() => muudaLeht("tutvustus")}>Vaata tutvustust</button>
      <button onClick={() => muudaLeht("myyk")}>Vaata müügitingimusi</button>
      <button onClick={() => muudaLeht("garantii")}>Vaata garantiitingimusi</button>
      {leht === "tutvustus" && <Tutvustus />}
      {leht === "myyk" && <Myyk />}
      {leht === "garantii" && <Garantii />}
      <Link to='/avaleht'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Ariklient;
