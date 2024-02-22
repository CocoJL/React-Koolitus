import React from "react";
import { Link } from "react-router-dom";

function LisaToode() {
  return (
    <div>
      <div>LisaToode</div>
      <div>
        <h1>The input element</h1>
        <form action='#'>
          <label for='fname'>First name: </label>
          <input type='text' id='fname' name='fname' />
          <br /> <br />
          <label for='lname'>Last name: </label>
          <input type='text' id='lname' name='lname' />
          <br /> <br />
          <input type='submit' value='Submit' />
        </form>
        <p>
          Click the "Submit" button and the form-data will be sent to a page on
          the server called "action_page.php".
        </p>
      </div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default LisaToode;
