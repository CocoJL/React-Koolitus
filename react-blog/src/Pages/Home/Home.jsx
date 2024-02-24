import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import TopBar from "../../topbar/TopBar";
import "./home.css";

function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
