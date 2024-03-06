import React, { useState } from 'react';
import tallinnJSON from '../data/tallinn.json';

function HaldaEsindused() {
	const [keskus, setKeskus] = useState(tallinnJSON);
	const deleteKeskus = (e) => {
		tallinnJSON.splice(e, 1);
		setKeskus(tallinnJSON.slice());
	};

	return (
		<div>
			{keskus.map((keskused, e) => (
				<div>
					{e}.{keskused}
					<button onClick={() => deleteKeskus(e)}>x</button>
				</div>
			))}
		</div>
	);
}

export default HaldaEsindused;
