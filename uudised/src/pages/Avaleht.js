import React from 'react';
import { Link } from 'react-router-dom';

function Avaleht() {
	return (
		<div>
			<div>
				<img
					src='https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg'
					alt='bg'
				/>
			</div>
			<Link to='/'>
				<button>Uudiste lehele</button>
			</Link>
			<Link to='/kontakt'>
				<button>Võta meiega ühendust</button>
			</Link>
			<Link to='/meist'>
				<button>Info meist</button>
			</Link>
			<Link to='/uudised'>
				<button>Uudised</button>
			</Link>
			<Link to='/tootajad'>
				<button>Tootajad</button>
			</Link>
		</div>
	);
}

export default Avaleht;
