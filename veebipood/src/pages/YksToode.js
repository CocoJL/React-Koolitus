import React from 'react';
import tootedJSON from '../data/tooted.json';
import { useParams } from 'react-router-dom';

function YksToode() {
	const { index } = useParams();
	const leitud = tootedJSON[index];

	if (leitud === undefined) {
		return <div>Toodet ei leitud</div>;
	}

	return (
		<div>
			{leitud.aktiivne === false && <div>Toode on mitteaktiivne!</div>}
			<h3>Nimi: {leitud.nimi}</h3> <br />
			<hr />
			<div>Hind: {leitud.hind}</div> <br />
			<div>
				<img className='pilt' src={leitud.pilt} alt='' />
			</div>
		</div>
	);
}

export default YksToode;
