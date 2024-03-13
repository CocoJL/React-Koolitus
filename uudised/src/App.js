import './App.css';
import { Route, Routes } from 'react-router-dom';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Avaleht from './pages/Avaleht';
import Tootajad from './pages/Tootajad';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Avaleht />} />
				<Route path='uudised' element={<Uudised />} />
				<Route path='kontakt' element={<Kontakt />} />
				<Route path='meist' element={<Meist />} />
				<Route path='tootajad' element={<Tootajad />} />
			</Routes>
		</div>
	);
}

export default App;
