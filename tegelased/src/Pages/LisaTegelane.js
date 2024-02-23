import React from "react";
import { useState } from "react";

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("Lisa uus tegelane!");
  return (
    <div>
      <div>{sonum}</div>
      <label>Tegelase nimi </label>
      <input type='text' /> <br />
      {sonum === "Lisa uus tegelane!" && <button onClick={() => uuendaSonum("Tegelane lisatud")}>Lisa uus</button>}
    </div>
  );
}

export default LisaTegelane;
