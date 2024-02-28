// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Esindused from "./pages/Esindused";
import Ariklient from "./pages/Ariklient";
import Kinkekaart from "./pages/Kinkekaart";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import Seaded from "./pages/Seaded";
import LisaTegelane from "./components/lisaTegelane/LisaTegelane";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='lisa-tegelane' element={<LisaTegelane />}></Route>
        <Route path='avaleht' element={<Avaleht />} />
        <Route path='esindused' element={<Esindused />} />
        <Route path='arikliendile' element={<Ariklient />} />
        <Route path='osta-kinkekaart' element={<Kinkekaart />} />
        <Route path='lisa-toode' element={<LisaToode />} />
        <Route path='ostukorv' element={<Ostukorv />} />
        <Route path='seaded' element={<Seaded />} />
        <Route path='*' element={<Avaleht />} />
      </Routes>
    </div>
  );
}

export default App;
