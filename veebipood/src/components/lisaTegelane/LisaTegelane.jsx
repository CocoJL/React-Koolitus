import { useRef, useState } from "react";
import "./lisaTegelane.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function LisaTegelane() {
  const nimiInput = useRef();
  const [lisa, setLisa] = useState("Lisa tegelane");

  const lisaUusTegelane = () => {
    if (nimiInput.current.value === "") {
      setLisa("Tühja nimega ei saa sisestada");
      toast.error("Tühja nimega ei saa sisestada");
      return;
    } else {
      setLisa("Aitäh edukalt lisatud");
      toast.success("Aitäh edukalt lisatud");
      nimiInput.current.value = "";
    }
  };
  return (
    <div>
      <div>
        <div className='lisa'>{lisa}</div>
        <label>Tegelase nimi</label> <br />
        <input type='text' ref={nimiInput} /> <br />
        {
          <button
            className={lisa === "Aitäh edukalt lisatud" ? "success" : "error"}
            onClick={lisaUusTegelane}
          >
            Lisa
          </button>
        }
      </div>
      <Link to='/avaleht'>
        <button>Avaleht</button>
      </Link>

      <ToastContainer />
    </div>
  );
}

export default LisaTegelane;
