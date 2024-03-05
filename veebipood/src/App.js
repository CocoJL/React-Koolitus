// import logo from "./logo.svg";
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaTegelane from './components/lisaTegelane/LisaTegelane';
import Hinnad from './pages/Hinnad';
import Töötajad from './pages/Töötajad';
import Tooted from './pages/Tooted';

function App() {
	return (
		<div className='App'>
			<Link to='/'>
				<img className='turtle' src='https://www.fisheries.noaa.gov/s3/styles/full_width/s3/dam-migration/hawksbill_sea_turtle.jpg?itok=ESbU98wo' alt='turtle' />
			</Link>
			<Link to='/esindused'>
				<button className='btn'>Esindused</button>
			</Link>
			<Link to='/arikliendile'>
				<button className='btn'>Äriklient</button>
			</Link>
			<Link to='/osta-kinkekaart'>
				<button className='btn'>Kinkekaart</button>
			</Link>
			<Link to='/lisa-toode'>
				<button className='btn'>Lisa toode</button>
			</Link>
			<Link to='/ostukorv'>
				<button className='btn'>Ostukorv</button>
			</Link>
			<Link to='/seaded'>
				<button className='btn'>Seaded</button>
			</Link>
			<Link to='/hinnad'>
				<button className='btn'>Hinnad</button>
			</Link>
			<Link to='/tootajad'>
				<button className='btn'>Töötajad</button>
			</Link>
			<Link to='/tooted'>
				<button className='btn'>Tooted</button>
			</Link>

			<Routes>
				<Route path='lisa-tegelane' element={<LisaTegelane />}></Route>
				<Route path='avaleht' element={<Avaleht />} />
				<Route path='esindused' element={<Esindused />} />
				<Route path='arikliendile' element={<Ariklient />} />
				<Route path='osta-kinkekaart' element={<Kinkekaart />} />
				<Route path='lisa-toode' element={<LisaToode />} />
				<Route path='ostukorv' element={<Ostukorv />} />
				<Route path='seaded' element={<Seaded />} />
				<Route path='hinnad' element={<Hinnad />} />
				<Route path='tootajad' element={<Töötajad />} />
				<Route path='tooted' element={<Tooted />} />
				<Route path='*' element={<Avaleht />} />
			</Routes>
		</div>
	);
}

export default App;
