import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Seaded() {
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");

  // Uuendaes HTMLi
  // uuendaKeel('est');
  // uuendaKeel('eng');
  const emailRef = useRef();
  const aadressRef = useRef();
  const telefonRef = useRef();
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [aadress, setAadress] = useState(localStorage.getItem("aadress"));
  const [telefon, setTelefon] = useState(localStorage.getItem("telefon"));

  const sisestaEmail = () => {
    if (emailRef.current.value === "") {
      toast.error("Email jäi tühjaks");
      return;
    }

    if (emailRef.current.value.includes("@") === false) {
      toast.error("Sisestaud e-mail ei ole korrektsel kujul");
      return;
    }

    setEmail(emailRef.current.value); // muudab HTMLI
    localStorage.setItem("email", emailRef.current.value); // Salvestab ls
    emailRef.current.value = "";
    toast.success("Email on sisestatud");
  };

  const sisestaAadress = () => {
    if (aadressRef.current.value === "") {
      toast.error("Aadressi väli jäi tühjaks");
      return;
    }

    if (aadressRef.current.value.toLowerCase()[0] === aadressRef.current.value[0]) {
      toast.error("Aadressi ei saa alustada väikse tähe või numbriga");
      return;
    }

    setAadress(aadressRef.current.value);
    localStorage.setItem("aadress", aadressRef.current.value);
    aadressRef.current.value = "";
    toast.success("Aadress on sisestatud");
  };
  // Kontrolli kas on sisestatud, konrolli kas algab +372
  const sisestaTelefon = () => {
    setTelefon(telefonRef.current.value);
    localStorage.setItem("telefon", telefonRef.current.value);
    telefonRef.current.value = "";
    toast.success("Telefon on sisestatud");
  };

  const muudaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel", "est");
  };

  const muudaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel", "eng");
  };

  const muudaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel", "rus");
  };
  return (
    <div>
      <div>Seaded</div>
      <label>Email</label>
      <input ref={emailRef} type='text' />
      <button onClick={sisestaEmail}>Sisesta</button>
      <br /> {email} <br />
      <label>Aadress</label>
      <input ref={aadressRef} type='text' />
      <button onClick={sisestaAadress}>Sisesta</button>
      <br /> {aadress}
      <br />
      <label>Telefon</label>
      <input ref={telefonRef} type='text' />
      <button onClick={sisestaTelefon}>Sisesta</button>
      <br /> {telefon}
      <br />
      <div className={keel === "est" ? "sinine" : undefined}>Keel: {keel}</div>
      {keel === "est" && <div className={keel === "est" ? "sinine" : undefined}>“Leht on eesti keelne”</div>}
      {keel === "eng" && <div>This page is written in english</div>}
      {keel === "rus" && <div>“Cтраница на русском языке”</div>}
      <div>
        <button onClick={muudaKeelEst}>Est</button>
        <button onClick={muudaKeelEng}>Eng</button>
        <button onClick={muudaKeelRus}>Rus</button>
      </div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
      <ToastContainer position='top-left' theme='dark' autoClose={2000} />
    </div>
  );
}

export default Seaded;
