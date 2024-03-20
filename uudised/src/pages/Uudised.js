import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Uudised() {
	const [tervitus] = useState('See on uudiste leht');
	const [uudis] = useState(JSON.parse(localStorage.getItem('uudised'))) || [];

	return (
		<div>
			{tervitus}

			<div>
				{uudis.map((uudised, index) => (
					<div key={index}>
						{uudised.uusUudis}
						<Link to={'/yks-uudis/' + index}>
							<button>Vt lahemalt</button>
						</Link>
						<Link to={'/muuda-uudis/' + index}>
							<button>Muuda</button>
						</Link>
					</div>
				))}
			</div>
			<br />
			<Link to='/'>
				<button>Tagasi</button>
			</Link>
		</div>
	);
}

export default Uudised;
