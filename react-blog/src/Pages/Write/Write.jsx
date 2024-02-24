import TopBar from "../../Components/topbar/TopBar";
import "./write.css";

function Write() {
  return (
    <div>
      <TopBar />
      <div className='write'>
        <img className='writeImg' src='/assets/images/single.jpg' alt='' />
        <form className='writeForm'>
          <div className='writeFormGroup'>
            <label htmlFor='fileInput'>
              <i className='writeIcon fa-solid fa-plus'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: "none" }} />
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
          </div>
          <div className='writeFormGroup'>
            <textarea placeholder='Tell your story' type='text' className='writeInput writeText'></textarea>
          </div>
          <button className='writeSubmit'>Publish</button>
        </form>
      </div>
    </div>
  );
}

export default Write;
