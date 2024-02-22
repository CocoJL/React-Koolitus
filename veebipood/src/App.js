// import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Esindused from "./pages/Esindused";
import Ariklient from "./pages/Ariklient";
import Kinkekaart from "./pages/Kinkekaart";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import Seaded from "./pages/Seaded";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Avaleht />} />
        <Route path='esindused' element={<Esindused />} />
        <Route path='arikliendile' element={<Ariklient />} />
        <Route path='osta-kinkekaart' element={<Kinkekaart />} />
        <Route path='lisa-toode' element={<LisaToode />} />
        <Route path='ostukorv' element={<Ostukorv />} />
        <Route path='seaded' element={<Seaded />} />
      </Routes>
    </div>
  );
}

export default App;
