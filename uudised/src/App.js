import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Uudised from "./pages/Uudised";
import Kontakt from "./pages/Kontakt";
import Meist from "./pages/Meist";
import Avaleht from "./pages/Avaleht";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Avaleht />} />
        <Route path='uudised' element={<Uudised />} />
        <Route path='kontakt' element={<Kontakt />} />
        <Route path='meist' element={<Meist />} />
      </Routes>
    </div>
  );
}

export default App;
