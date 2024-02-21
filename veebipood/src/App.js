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
      <Link to='avaleht'>
        <img
          className='turtle'
          src='https://www.fisheries.noaa.gov/s3/styles/full_width/s3/dam-migration/hawksbill_sea_turtle.jpg?itok=ESbU98wo'
          alt='turtle'
        />
      </Link>

      <Link to='esindused'>
        <button className='btn'>Esindused</button>
      </Link>

      <Link to='arikliendile'>
        <button className='btn'>Äriklient</button>
      </Link>

      <Link to='osta-kinkekaart'>
        <button className='btn'>Kinkekaart</button>
      </Link>

      <Link to='lisa-toode'>
        <button className='btn'>Lisa toode</button>
      </Link>

      <Link to='ostukorv'>
        <button className='btn'>Ostukorv</button>
      </Link>

      <Link to='seaded'>
        <button className='btn'>Seaded</button>
      </Link>

      <Routes>
        <Route path='avaleht' element={<Avaleht />} />
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
