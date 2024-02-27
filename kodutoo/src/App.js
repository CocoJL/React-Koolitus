import { Routes, Route, Link } from "react-router-dom";
import Avaleht from "./Pages/Avaleht/Avaleht";
import Meist from "./Pages/Meist/Meist";
import Kontakt from "./Pages/Kontakt/Kontakt";

function App() {
  return (
    <div className='app'>
      <div>
        <Link to='/'>
          <button>Avaleht</button>
        </Link>
        <Link to='/meist'>
          <button>Meist</button>
        </Link>
        <Link to='/kontakt'>
          <button>Kontakt</button>
        </Link>
        <Routes>
          <Route path='/' element={<Avaleht />}></Route>
          <Route path='meist' element={<Meist />}></Route>
          <Route path='kontakt' element={<Kontakt />}></Route>
          <Route path='*' element={<Avaleht />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
