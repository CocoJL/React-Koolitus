import "./single.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import SinglePost from "../../Components/singlePost/SinglePost";
import TopBar from "../../Components/topbar/TopBar";
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
