import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Avaleht from "./Pages/Avaleht";
import VaataArvuteid from "./Pages/VaataArvuteid";
import LisaArvuti from "./Pages/LisaArvuti";

function App() {
  return (
    <div>
      <Link to=''>
        <button>Avaleht</button>
      </Link>
      <Link to='/all'>
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to='/add'>
        <button>Lisa sülearvuti</button>
      </Link>
      <Routes>
        <Route path='' element={<Avaleht />} />
        <Route path='all' element={<VaataArvuteid />} />
        <Route path='add' element={<LisaArvuti />} />
      </Routes>
    </div>
  );
}

export default App;
