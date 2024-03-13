import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Avaleht from './Pages/Avaleht/Avaleht';
import Tagasiside from './Pages/Tagasiside/Tagasiside';
import TagasisideAndjad from './Pages/TagasisideAndjad/TagasisideAndjad';
import YksTagasisideAndja from './Pages/YksTagasisideAndja/YksTagasisideAndja';
import Tegevused from './Pages/Tegevused/Tegevused';
import Ulesanne from './Pages/Ulesanne/Ulesanne';

function App() {
	return (
		<div className='App'>
			<Link to='/'>
				<button>Avaleht</button>
			</Link>
			<Link to='/tagasiside'>
				<button>Tagasiside</button>
			</Link>
			<Link to='/tagasisideandjad'>
				<button>Tagasiside andjad</button>
			</Link>
			<Link to='/tegevused'>
				<button>Tegevused</button>
			</Link>
			<Link to='/ulesanne'>
				<button>Ulesanne</button>
			</Link>
			<Routes>
				<Route path='/' element={<Avaleht />}></Route>
				<Route path='tagasiside' element={<Tagasiside />}></Route>
				<Route path='tegevused' element={<Tegevused />}></Route>
				<Route path='ulesanne' element={<Ulesanne />}></Route>
				<Route path='tagasisideandjad' element={<TagasisideAndjad />}></Route>
				<Route
					path='yks-tagasiside/:index'
					element={<YksTagasisideAndja />}
				></Route>
				<Route path='*' element={<Avaleht />}></Route>
			</Routes>
		</div>
	);
}

export default App;
