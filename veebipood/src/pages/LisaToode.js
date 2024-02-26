import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("");
  const readInput = useRef();
  const catInput = useRef();

  const lisa = () => {
    if (readInput.current.value === "") {
      uuendaSonum("Palun lisa toode");
    } else {
      uuendaSonum("Toote nimi: " + readInput.current.value + ", Kategooria nimi: " + catInput.current.value);
    }
  };

  return (
    <div>
      <div>LisaToode</div>
      <div>
        <h1>The input element</h1>
        <label>Toote nimi: </label>
        <input ref={readInput} type='text' />
        <br /> <br />
        <label>Toote kategooria: </label>
        <input ref={catInput} type='text' />
        <br /> <br />
        <button onClick={lisa}>Sisesta</button>
        <p style={{ color: "white", backgroundColor: "hsla(0, 0%, 0%, 0.50)" }}>{sonum}</p>
      </div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default LisaToode;
