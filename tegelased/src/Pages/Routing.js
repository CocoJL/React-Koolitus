import React from 'react';
import { Link } from 'react-router-dom';

function Routing() {
	return (
		<div>
			<Link to='/'>
				<button>Avalehele</button>
			</Link>
			<Link to='/lisa-tegelane'>
				<button>Lisa tegelane</button>
			</Link>
			<Link to='/valitud-tegelased'>
				<button>Valitud tegelased</button>
			</Link>
		</div>
	);
}

export default Routing;
