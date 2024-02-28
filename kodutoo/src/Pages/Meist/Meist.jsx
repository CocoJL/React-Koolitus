import { useState } from "react";
import "./meist.css";

function Meist() {
  const [message, setMessage] = useState("Vali mõni tegevus");
  return (
    <div>
      <br />
      <div>{message}</div>
      <br />
      <div>
        <button
          onClick={() =>
            setMessage("Selleks saada meile e-mail jobs@html-css.com")
          }
        >
          Kandideeri tööle
        </button>
        <button
          onClick={() =>
            setMessage(
              "Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal"
            )
          }
        >
          Vaata meie töötajaid
        </button>
        <button
          onClick={() => setMessage("Ühenduse võtmiseks mine lehele Kontakt")}
        >
          Võta meiega ühendust
        </button>
      </div>
    </div>
  );
}

export default Meist;
