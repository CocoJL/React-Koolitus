// import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Esindused from "./pages/Esindused";
import Ariklient from "./pages/Ariklient";
import Kinkekaart from "./pages/Kinkekaart";

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

      <Routes>
        <Route path='avaleht' element={<Avaleht />} />
        <Route path='esindused' element={<Esindused />} />
        <Route path='arikliendile' element={<Ariklient />} />
        <Route path='osta-kinkekaart' element={<Kinkekaart />} />
      </Routes>
    </div>
  );
}

export default App;
