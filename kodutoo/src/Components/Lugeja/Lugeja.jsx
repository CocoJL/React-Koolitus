import { useRef, useState } from "react";
import "./lugeja.css";

function Lugeja() {
  const [muutuja, setMuutuja] = useState("");
  const inputLugeja = useRef();

  const muutujaFunktsioon = () => {
    setMuutuja(inputLugeja.current.value);
  };

  return (
    <div>
      <div className='center'>
        <br />
        <input ref={inputLugeja} type='text' /> <br />
        <button onClick={muutujaFunktsioon}>Muuda</button> <br />
        <div> {muutuja}</div>
      </div>
    </div>
  );
}

export default Lugeja;
