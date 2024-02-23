import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path=''
          element={
            <div className='header'>
              <div class='headerTitles'>
                <span class='headerTitleLr'>Blogi</span>
              </div>
              <img
                class='headerImg'
                src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg'
                alt=''
              />
            </div>
          }
        />

        <Route path='lisa-postitus' element={<img src='' alt='' />} />
        <Route path='contact' element={<div>Saada sõnum</div>} />
        <Route path='login' element={<div>Logi sisse</div>} />
        <Route path='register' element={<div>Registreeri</div>} />
      </Routes>
      <div className='App'></div>
    </div>
  );
}

export default App;
