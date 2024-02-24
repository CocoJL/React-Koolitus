import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import TopBar from "../../Components/topbar/TopBar";
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
