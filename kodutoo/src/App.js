import { Routes, Route, Link } from "react-router-dom";
import Avaleht from "./Pages/Avaleht/Avaleht";
import Meist from "./Pages/Meist/Meist";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Logi from "./Components/Logi/Logi";
import Lugeja from "./Components/Lugeja/Lugeja";
import Loader from "./Components/Loader/Loader";

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
          <Route path='logi' element={<Logi />}></Route>
          <Route path='lugeja' element={<Lugeja />}></Route>
          <Route path='loader' element={<Loader />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
