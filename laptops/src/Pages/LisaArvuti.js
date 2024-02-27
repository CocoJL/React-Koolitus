import React from "react";
import { useState } from "react";

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti!");
  const [nupp, setNupp] = useState(true);

  function addProduct() {
    setMessage("Lisatud, aitäh!");
    setNupp(false);
  }

  return (
    <div>
      <div>Sõnum: {message}</div>
      <label>Mark</label> <br />
      <input type='text' /> <br />
      <label>Mudel</label> <br />
      <input type='text' /> <br />
      <label>Maksumus</label> <br />
      <input type='number' /> <br />
      {nupp === true && <button onClick={addProduct}>Sisesta</button>}
    </div>
  );
}

export default LisaArvuti;
