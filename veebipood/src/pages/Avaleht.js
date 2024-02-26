import React, { useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {
  const [kogus, setKogus] = useState(0);
  const [message, setMessage] = useState("");
  const [like, setLike] = useState(false);

  function nulli() {
    setKogus(0);
    setMessage("Nullisid koguse!");
  }

  function vahenda() {
    setKogus(kogus - 1);
    setMessage("Vähendasid kogust!");
  }

  function suurenda() {
    setKogus(kogus + 1);
    setMessage("Suurendasid kogust!");
  }

  return (
    <div>
      {like === false && <img src='/assets/images/dislike.svg' alt='' />}
      {like === true && <img src='/assets/images/like.svg' alt='' />}

      <button onClick={() => setLike(!like)}>Muuda like</button>

      <br />
      <br />
      <div>{message}</div>

      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}

      <br />

      <button disabled={kogus === 0} onClick={vahenda}>
        -
      </button>

      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>

      <button onClick={suurenda}>+</button>

      <br />

      <Link to='/'>
        <img
          className='turtle'
          src='https://www.fisheries.noaa.gov/s3/styles/full_width/s3/dam-migration/hawksbill_sea_turtle.jpg?itok=ESbU98wo'
          alt='turtle'
        />
      </Link>
      <Link to='/esindused'>
        <button className='btn'>Esindused</button>
      </Link>
      <Link to='/arikliendile'>
        <button className='btn'>Äriklient</button>
      </Link>
      <Link to='/osta-kinkekaart'>
        <button className='btn'>Kinkekaart</button>
      </Link>
      <Link to='/lisa-toode'>
        <button className='btn'>Lisa toode</button>
      </Link>
      <Link to='/ostukorv'>
        <button className='btn'>Ostukorv</button>
      </Link>
      <Link to='/seaded'>
        <button className='btn'>Seaded</button>
      </Link>
    </div>
  );
}

export default Avaleht;
