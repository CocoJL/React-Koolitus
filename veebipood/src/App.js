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
import Tooted from './pages/Tooted';
import Tootajad from './pages/Tootajad';
import HaldaTooted from './pages/HaldaTooted';
import HaldaEsindused from './pages/HaldaEsindused';
import HaldaHinnad from './pages/HaldaHinnad';
import HaldaTootajad from './pages/HaldaTootajad';
import LisaHind from './pages/LisaHind';
import LisaEsindus from './pages/LisaEsindus';
import LisaTootaja from './pages/LisaTootaja';

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
			<br /> <br />
			<Link to='/lisa-toode'>
				<button className='btn'>Lisa toode</button>
			</Link>
			<Link to='/halda-tooted'>
				<button className='btn'>Halda tooteid</button>
			</Link>
			<Link to='/halda-esindused'>
				<button className='btn'>Halda esindusi</button>
			</Link>
			<Link to='/halda-hinnad'>
				<button className='btn'>Halda hindu</button>
			</Link>
			<Link to='/halda-tootajad'>
				<button className='btn'>Halda töötajaid</button>
			</Link>
			<Link to='/lisa-hind'>
				<button className='btn'>Lisa hind</button>
			</Link>
			<Link to='/lisa-esindus'>
				<button className='btn'>Lisa esindus</button>
			</Link>
			<Link to='/lisa-tootaja'>
				<button className='btn'>Lisa töötaja</button>
			</Link>
			<Routes>
				<Route path='lisa-tegelane' element={<LisaTegelane />}></Route>
				<Route path='' element={<Avaleht />} />
				<Route path='esindused' element={<Esindused />} />
				<Route path='arikliendile' element={<Ariklient />} />
				<Route path='osta-kinkekaart' element={<Kinkekaart />} />
				<Route path='lisa-toode' element={<LisaToode />} />
				<Route path='ostukorv' element={<Ostukorv />} />
				<Route path='seaded' element={<Seaded />} />
				<Route path='hinnad' element={<Hinnad />} />
				<Route path='tootajad' element={<Tootajad />} />
				<Route path='tooted' element={<Tooted />} />

				<Route path='halda-tooted' element={<HaldaTooted />} />
				<Route path='halda-esindused' element={<HaldaEsindused />} />
				<Route path='halda-hinnad' element={<HaldaHinnad />} />
				<Route path='halda-tootajad' element={<HaldaTootajad />} />
				<Route path='*' element={<Avaleht />} />
				<Route path='lisa-hind' element={<LisaHind />} />
				<Route path='lisa-esindus' element={<LisaEsindus />} />
				<Route path='lisa-tootaja' element={<LisaTootaja />} />
			</Routes>
		</div>
	);
}

export default App;
