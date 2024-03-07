import { Routes, Route, Link } from 'react-router-dom';
import Avaleht from './Pages/Avaleht/Avaleht';
import Haldajooke from './Pages/HaldaJooke/Haldajooke';
import LisaJook from './Pages/LisaJook/LisaJook';

function App() {
	return (
		<div className='App'>
			<Link to='/'>
				<button>Avaleht</button>
			</Link>
			<Link to='/haldajooke'>
				<button>Haldajooke</button>
			</Link>
			<Link to='/lisajook'>
				<button>Lisajook</button>
			</Link>
			<Routes>
				<Route path='/' element={<Avaleht />}></Route>
				<Route path='haldajooke' element={<Haldajooke />}></Route>
				<Route path='lisajook' element={<LisaJook />}></Route>
			</Routes>
		</div>
	);
}

export default App;
