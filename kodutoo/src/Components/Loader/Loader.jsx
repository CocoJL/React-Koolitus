import { useState } from "react";
import "./loader.css";

function Loader() {
  const [laeb, setLaeb] = useState(true);

  const turnOff = () => {
    setLaeb(false);
  };

  const turnOn = () => {
    setLaeb(true);
  };
  return (
    <div>
      {laeb === true && (
        <div class='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {laeb === true && <button onClick={turnOff}>Turn off</button>}
      {laeb === false && <button onClick={turnOn}>Turn on</button>}
    </div>
  );
}

export default Loader;
