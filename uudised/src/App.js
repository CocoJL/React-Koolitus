import './App.css';
import { Route, Routes } from 'react-router-dom';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Avaleht from './pages/Avaleht';
import Tootajad from './pages/Tootajad';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Avaleht />} />
				<Route path='uudised' element={<Uudised />} />
				<Route path='kontakt' element={<Kontakt />} />
				<Route path='meist' element={<Meist />} />
				<Route path='tootajad' element={<Tootajad />} />
				<Route path='lisa-uudis' element={<LisaUudis />} />
				<Route path='halda-uudis' element={<HaldaUudiseid />} />
				<Route path='yks-uudis/:index' element={<YksUudis />} />
				<Route path='muuda-uudis/:index' element={<MuudaUudis />} />
				<Route path='kasutaja-postitus/:index' element={<KasutajaPostitus />} />
				<Route path='yks-postitus/:index' element={<YksPostitus />} />
			</Routes>
		</div>
	);
}

export default App;
