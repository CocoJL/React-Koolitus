import React, { useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [kursus, uuendaKursus] = useState("Valimata");

  return (
    <div>
      <div className='button-wrapper'>
        <Link to='/navbar'>
          <button>Tagasi</button>
        </Link>

        <button className={kursus === "udemy" ? "kursusActive" : "kursuOffline"} onClick={() => uuendaKursus("udemy")}>
          Udemy
        </button>

        <button
          className={kursus === "coursera" ? "kursusActive" : "kursuOffline"}
          onClick={() => uuendaKursus("coursera")}
        >
          Coursera
        </button>

        <button
          className={kursus === "codeacademy" ? "kursusActive" : "kursuOffline"}
          onClick={() => uuendaKursus("codeacademy")}
        >
          Codeacademy
        </button>

        <button
          className={kursus === "udacity" ? "kursusAactive" : "kursuOffline"}
          onClick={() => uuendaKursus("udacity")}
        >
          Udacity
        </button>
      </div>
      <div className='kirjeldus'>
        {kursus === "udemy" && <div>Siin on kirjeldus Udemy.com läbitud kursustest</div>}
        {kursus === "coursera" && <div>Siin on kirjeldus Coursera.org läbitud kursustest</div>}
        {kursus === "codeacademy" && <div>Siin on kirjeldus Codeacademy.com läbitud kursustest</div>}
        {kursus === "udacity" && <div>Siin on kirjeldus Udacity.com läbitud kursustest</div>}
      </div>
    </div>
  );
}

export default Courses;
