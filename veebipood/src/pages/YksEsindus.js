import React from 'react';
import esindusJSON from '../data/tallinn.json';
import { useParams } from 'react-router-dom';

function YksEsindus() {
	const { index } = useParams();
	const esindus = esindusJSON[index];

	if (esindus === undefined) {
		return <div>Esindust ei leitud</div>;
	}

	return (
		<div>
			<div>
				<h3>Esinduse nimi: {esindus.nimi}</h3>
			</div>
		</div>
	);
}

export default YksEsindus;
