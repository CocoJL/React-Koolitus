import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div>Avaleht</div>} />
        <Route path='all' element={<div>Sülearvutid</div>} />
        <Route path='add' element={<div>Uue sülearvuti lisamine</div>} />
      </Routes>
    </div>
  );
}

export default App;
