import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Avaleht from "./Pages/Avaleht";
import LisaTegelane from "./Pages/LisaTegelane";
import ValitudTegelased from "./Pages/ValitudTegelased";

function App() {
  return (
    <div>
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/lisa-tegelane'>
        <button>Lisa tegelane</button>
      </Link>
      <Link to='valitud-tegelased'>
        <button>Valitud tegelased</button>
      </Link>
      <Routes>
        <Route path='/' element={<Avaleht />} />
        <Route path='lisa-tegelane' element={<LisaTegelane />} />
        <Route path='valitud-tegelased' element={<ValitudTegelased />} />
      </Routes>
      <div className='App'></div>
    </div>
  );
}

export default App;
