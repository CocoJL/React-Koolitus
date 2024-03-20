import React, { useState } from 'react';
import Routing from './Routing';

function ValitudTegelased() {
	const [valitud, setValitud] = useState(
		JSON.parse(localStorage.getItem('tegelased')) || []
	);

	const eemalda = (e) => {
		valitud.splice(e, 1);
		setValitud(valitud.slice());
		localStorage.setItem('tegelased', JSON.stringify(valitud));
	};

	const empty = (e) => {
		setValitud([]);
		localStorage.setItem('tegelased', JSON.stringify(valitud));
	};

	return (
		<div>
			<Routing />
			<div>
				{valitud.length ? (
					<div>
						<button onClick={empty}>Tühjenda</button>
						<div>Lehel on valitud: {valitud.length} tegelast</div>
					</div>
				) : (
					<div>Ühtegi tegelast pole valitud</div>
				)}
				{valitud.map((tegelane, index) => (
					<div>
						<div key={index}>
							{tegelane.eesnimi}
							{tegelane.perenimi}
							{tegelane.elukoht}
							{tegelane.vanus}
							<button onClick={() => eemalda(index)}>x</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ValitudTegelased;
