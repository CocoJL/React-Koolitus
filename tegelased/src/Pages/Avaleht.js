import React, { useState } from 'react';
import tegelasedJSON from '../data/tegelased.json';
function Avaleht() {
	const tegelased = tegelasedJSON;
	const [nimi, setNimi] = useState('');
	const kuvaNimi = (tegelane) => {
		setNimi(tegelane.eesnimi);
	};

	return (
		<div>
			{nimi !== '' && <div>Klikkisid tegelase {nimi} peal</div>}
			{tegelased.map((tegelane) => (
				<div>{tegelane.eesnimi}</div>
			))}
			<button onClick={kuvaNimi}>Kuva</button>
		</div>
	);
}

export default Avaleht;
