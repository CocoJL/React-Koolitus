import "./App.css";
import { Route, Routes } from "react-router-dom";
import Courses from "./Pages/Courses";
import Hobbies from "./Pages/Hobbies";
import Work from "./Pages/Work";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path='navbar' element={<Navbar />} />
        <Route path='courses' element={<Courses />} />
        <Route path='hobbies' element={<Hobbies />} />
        <Route path='work' element={<Work />} />
        <Route path='*' element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
