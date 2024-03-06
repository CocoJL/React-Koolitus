import Home from './Pages/Home/Home';
import Single from './Pages/single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/settings/Settings';
import Login from './Pages/login/Login';
import Register from './Pages/register/register';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='register' element={<Register />} />
			<Route path='login' element={<Login />} />
			<Route path='write' element={<Write />} />
			<Route path='settings' element={<Settings />} />
			<Route path='post' element={<Single />} />
			<Route path='*' element={<Home />} />
		</Routes>
	);
}

export default App;
