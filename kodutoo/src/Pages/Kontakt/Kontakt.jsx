import { useState } from "react";
import "./kontakt.css";
import toast, { Toaster } from "react-hot-toast";

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

  const muudaEesti = () => {
    setMuudaNimi("Tallinn");
    setMuudaNumber("5512932");
    setMuudaEmail("bla@gmail.com");
    setIngliseKeelne("ei");
  };

  const notify = () => toast("Here is your toast.");

  return (
    <div>
      <div>
        {muudaNimi} <br />
        {muudaNumber} <br />
        {muudaEmail} <br />
      </div>
      {ingliseKeelne === "ei" && (
        <button onClick={muudaKeel}>Muuda inglise keelseks</button>
      )}
      {ingliseKeelne === "jah" && (
        <button onClick={muudaEesti}>Muuda eesti keelseks</button>
      )}
      {ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
      {ingliseKeelne === "ei" && <div>Leht on eesti keelne</div>}

      <div>
        <button onClick={notify}>Make me a toast</button>
      </div>
      <Toaster />
    </div>
  );
}

export default Kontakt;
