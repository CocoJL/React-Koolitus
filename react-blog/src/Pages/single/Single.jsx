import "./single.css";
import Sidebar from "../../sidebar/Sidebar";
import SinglePost from "../../singlePost/SinglePost";
import TopBar from "../../topbar/TopBar";
function Single() {
  return (
    <div>
      <TopBar />
      <div className='single'>
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
}

export default Single;
