import React, { useState } from 'react';
import tootedFailist from '../data/tooted.json';
import { Link } from 'react-router-dom';
import ostukorvJSON from '../data/ostukorv.json';
import { ToastContainer, toast } from 'react-toastify';
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

	const lisaOstukorvi = (lisatavToode) => {
		ostukorvJSON.push(lisatavToode);
		toast.success('Edukalt lisatud');
	};

	// const filtreeriNAlgavad = () => {
	// 	const vastus = tootedFailist.filter((toode) => toode.nimi.startsWith('N'));
	// 	setTooted(vastus);
	// };

	// const filtreeriBAlgavad = () => {
	// 	const vastus = tootedFailist.filter((toode) => toode.nimi.startsWith('B'));
	// 	setTooted(vastus);
	// };

	// const filtreeriTAlgavad = () => {
	// 	const vastus = tootedFailist.filter((toode) => toode.nimi.startsWith('T'));
	// 	setTooted(vastus);
	// };

	const filtreeriAlgustaheJargi = (algustaht) => {
		const vastus = tootedFailist.filter((toode) =>
			toode.nimi.startsWith(algustaht)
		);
		setTooted(vastus);
	};

	return (
		<div>
			<h2>Tooted</h2>
			{/* <button onClick={filtreeriNAlgavad}>N</button>
			<button onClick={filtreeriBAlgavad}>B</button>
			<button onClick={filtreeriTAlgavad}>T</button> */}
			<button onClick={() => filtreeriAlgustaheJargi('N')}>N</button>
			<button onClick={() => filtreeriAlgustaheJargi('B')}>B</button>
			<button onClick={() => filtreeriAlgustaheJargi('T')}>T</button>
			{/* Väljastame tooted */}
			<ul>
				{tooted.map((toode, index) => (
					<div key={index}>
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
						<button
							disabled={toode.aktiivne === false}
							onClick={() => lisaOstukorvi(toode)}
						>
							lisa ostukorvi
						</button>
						<br />
					</div>
				))}
			</ul>
			{/* Näitame toodete kogust */}
			<p>Kokku on {tooted.length} toodet.</p>
			{/* Nupud sorteerimiseks */}
			<button onClick={sorteeriAZ}>Sorteeri A-Z</button>
			<button onClick={sorteeriZA}>Sorteeri Z-A</button>
			<ToastContainer />
		</div>
	);
}

export default Tooted;
