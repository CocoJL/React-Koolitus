import { useState } from "react";
import "./logi.css";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

// ^(?=.*[a-z])(?=.*[A-Z])(?=.*[%]).{8,}$ regex

function Logi() {
  const [logitud, setLogitud] = useState(false);
  const [message, setMessage] = useState("");
  const kasutajaRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value.length < 8) {
      setMessage("Parool on liiga lyhike");
      toast.error("Parool liiga lyhike");
      return;
    }
    if (paroolRef.current.value.toLowerCase() === paroolRef.current.value) {
      toast.error("Peab sisaldama suurt t2hte");
      return;
    }
    if (paroolRef.current.value.toUpperCase === paroolRef.current.value) {
      toast.error("Peab sisaldama v2ikest t2hte");
    }
    if (paroolRef.current.value.includes("%") === false) {
      toast.error("Peab sisaldama protsenti");
    } else {
      setLogitud(true);
      setMessage(kasutajaRef.current.value + ", Oled sisse logitud");
      toast.success("Sõnum");
      return;
    }
  };

  const logiValja = () => {
    setLogitud(false);
    setMessage("Logisid välja");
    toast.success("Logisid välja");
    return;
  };
  return (
    <div>
      <br />
      <div>{message}</div>

      <br />
      <div>
        {logitud === false && (
          <div>
            <label>Kasutajanimi</label> <br />
            <input ref={kasutajaRef} type='text' /> <br />
            <label>Parool</label> <br />
            <input ref={paroolRef} type='password' /> <br />
          </div>
        )}{" "}
        <br />
        {logitud === false && <button onClick={logiSisse}>Logi sisse</button>}
        {logitud === true && <button onClick={logiValja}>Logi välja</button>}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Logi;
