import React from "react";
import { Link } from "react-router-dom";

function Avaleht() {
  return (
    <div>
      <div className='hero-banner'>
        <img src='/assets/images/matrix.png' alt='matrix' />
      </div>
      <div className='name'>
        <h1>Hello, I am Jürgen and this is my Portfolio</h1>
      </div>
      <div className='border-wrapper'>
        <div className='border'></div>
      </div>
      <div className='image-wrapper'>
        <div className='image'>
          <Link to='work'>
            <img src='/assets/images/work.jpg' alt='work station' />
          </Link>
          <p>Work</p>
        </div>
        <div className='image'>
          <Link to='hobbies'>
            <img src='/assets/images/hobbies.jpg' alt='gym' />
          </Link>
          <p>Hobbies</p>
        </div>
        <div className='image'>
          <Link to='courses'>
            <img src='/assets/images/courses.jpg' alt='courses' />
          </Link>
          <p>Courses</p>
        </div>
      </div>
    </div>
  );
}

export default Avaleht;
