import React, { useState } from 'react';
import tootedFailist from '../data/tooted.json';
import { Link } from 'react-router-dom';

function Tooted() {
	// Andmete algväärtus
	const [tooted, setTooted] = useState(tootedFailist);

	// Funktsioon A-Z järgi sorteerimiseks
	const sorteeriAZ = () => {
		tooted.sort((a, b) => a.localeCompare(b));
		setTooted(tooted.slice());
	};

	// Funktsioon Z-A järgi sorteerimiseks
	const sorteeriZA = () => {
		tooted.sort((a, b) => b.localeCompare(a));
		setTooted(tooted.slice());
	};

	return (
		<div>
			<h2>Tooted</h2>
			{/* Väljastame tooted */}
			<ul>
				{tooted.map((toode, index) => (
					<div key={toode}>
						<img
							className={toode.aktiivne ? 'pilt' : 'pilt-mitteaktiivne'}
							src={toode.pilt}
							alt=''
						/>{' '}
						<br />
						<div>{toode.nimi}</div>
						<div>{toode.hind} €</div>
						{/* Esimene / kui j22b 2ra siis liidab olemasoleva URL, 
						kui teine kaldkriips j22b 2ra siis liidab URL ja nr kokku */}
						<Link to={'/toode/' + index}>
							<button>Vaata lähemalt</button>
						</Link>
						<br />
					</div>
				))}
			</ul>
			{/* Näitame toodete kogust */}
			<p>Kokku on {tooted.length} toodet.</p>
			{/* Nupud sorteerimiseks */}
			<button onClick={sorteeriAZ}>Sorteeri A-Z</button>
			<button onClick={sorteeriZA}>Sorteeri Z-A</button>
		</div>
	);
}

export default Tooted;
