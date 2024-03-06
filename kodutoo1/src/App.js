import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Avaleht from './Pages/Avaleht/Avaleht';
import Tabel from './Pages/Tabel/Tabel';
import Books from './Pages/Books/Books';
import Numbrid from './Pages/Numbrid/Numbrid';

function App() {
	return (
		<div>
			<Link to='/'>
				<button>Avaleht</button>
			</Link>
			<Link to='/tabel'>
				<button>Tabel</button>
			</Link>
			<Link to='/books'>
				<button>Books</button>
			</Link>
			<Link to='/numbrid'>
				<button>Numbrid</button>
			</Link>
			<Routes>
				<Route path='/' element={<Avaleht />}></Route>
				<Route path='tabel' element={<Tabel />}></Route>
				<Route path='books' element={<Books />}></Route>
				<Route path='numbrid' element={<Numbrid />}></Route>
			</Routes>
		</div>
	);
}

export default App;
