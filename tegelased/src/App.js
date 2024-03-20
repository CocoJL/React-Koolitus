import './App.css';
import { Routes, Route } from 'react-router-dom';
import Avaleht from './Pages/Avaleht';
import LisaTegelane from './Pages/LisaTegelane';
import ValitudTegelased from './Pages/ValitudTegelased';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Avaleht />} />
				<Route path='lisa-tegelane' element={<LisaTegelane />} />
				<Route path='valitud-tegelased' element={<ValitudTegelased />} />
			</Routes>
		</div>
	);
}

export default App;
