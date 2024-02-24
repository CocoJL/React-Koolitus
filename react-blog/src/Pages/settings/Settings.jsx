import Sidebar from "../../sidebar/Sidebar";
import TopBar from "../../topbar/TopBar";
import "./settings.css";

function Settings() {
  return (
    <div>
      <TopBar />
      <div className='settings'>
        <div className='settingsWrapper'>
          <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle'>Delete Your Account</span>
          </div>
          <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className='settingsPP'>
              <img src='/assets/images/single.jpg' alt='' />
              <label htmlFor='fileInput'>
                <i className='settingsPPIcon fa-solid fa-user'></i>
              </label>
              <input type='file' id='fileInput' style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type='text' placeholder='Cipher' />
            <label>Email</label>
            <input type='text' placeholder='cipher@gmail.com' />
            <label>Password</label>
            <input type='password' />
            <button className='settingsSubmit'>Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default Settings;
