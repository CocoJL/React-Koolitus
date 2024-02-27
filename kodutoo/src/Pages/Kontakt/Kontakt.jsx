import { useState } from "react";
import "./kontakt.css";

function Kontakt() {
  const [muudaNimi, setMuudaNimi] = useState("Tallinn");
  const [muudaNumber, setMuudaNumber] = useState("5512932");
  const [muudaEmail, setMuudaEmail] = useState("bla@gmail.com");
  const [ingliseKeelne, setIngliseKeelne] = useState("ei");

  const muudaKeel = () => {
    setMuudaNimi("London");
    setMuudaNumber("1233123");
    setMuudaEmail("wagwan@london.com");
    setIngliseKeelne("jah");
  };
  return (
    <div>
      <div>
        {muudaNimi} <br />
        {muudaNumber} <br />
        {muudaEmail} <br />
      </div>
      <button onClick={muudaKeel}>Muuda inglise keelseks</button>
      {ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
    </div>
  );
}

export default Kontakt;
