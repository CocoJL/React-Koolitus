import React from "react";
import { Link } from "react-router-dom";

function Avaleht() {
  return (
    <div>
      <Link to='/avaleht'>
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
