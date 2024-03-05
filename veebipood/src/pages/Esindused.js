import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tallinnJSON from '../data/tallinn.json';
function Esindused() {
	const [linn, muudaLinn] = useState('Tallinn');
	const [keskus, setKeskus] = useState(tallinnJSON);

	const original = () => {
		setKeskus(tallinnJSON);
	};

	const sortAZ = () => {
		keskus.sort((a, b) => a.localeCompare(b));
		setKeskus(keskus.slice());
	};

	const sortZA = () => {
		keskus.sort((a, b) => b.localeCompare(a));
		setKeskus(keskus.slice());
	};

	const sortTähedKasvavalt = () => {
		keskus.sort((a, b) => a.length - b.length);
		setKeskus(keskus.slice());
	};

	const sortTähedKahanevalt = () => {
		keskus.sort((a, b) => b.length - a.length);
		setKeskus(keskus.slice());
	};

	const sortKolmasTähtAZ = () => {
		keskus.sort((a, b) => a[2].localeCompare(b[2]));
		setKeskus(keskus.slice());
	};

	const filterE = () => {
		const vastus = keskus.filter((keskus) => keskus.endsWith('e'));
		setKeskus(vastus);
	};

	const filter9 = () => {
		const vastus = keskus.filter((keskus) => keskus.length === 9);
		setKeskus(vastus);
	};

	const filter7 = () => {
		const vastus = keskus.filter((keskus) => keskus.length >= 7);
		setKeskus(vastus);
	};

	const filterIs = () => {
		const vastus = keskus.filter((keskus) => keskus.includes('is'));
		setKeskus(vastus);
	};

	const filter3 = () => {
		const vastus = keskus.filter((keskus) => keskus[2] === 'i');
		setKeskus(vastus);
	};

	return (
		<div>
			<div>Esindused</div>

			<span className={linn === 'Tallinn' ? 'linn-aktiivne' : 'linn'} onClick={() => muudaLinn('Tallinn')}>
				Tallinn (7)
			</span>

			<span className={linn === 'Tartu' ? 'linn-aktiivne' : 'linn'} onClick={() => muudaLinn('Tartu')}>
				Tartu (2)
			</span>

			<span className={linn === 'Narva' ? 'linn-aktiivne' : 'linn'} onClick={() => muudaLinn('Narva')}>
				Narva (1)
			</span>

			<span className={linn === 'Pärnu' ? 'linn-aktiivne' : 'linn'} onClick={() => muudaLinn('Pärnu')}>
				Pärnu (1)
			</span>

			<br />
			<br />
			<div>Aktiivne linn on: {linn}</div>
			<br />

			{linn === 'Tallinn' && (
				<div>
					{keskus.map((keskused) => (
						<div>{keskused}</div>
					))}
					<button onClick={original}>Originaali</button> <br />
					<button onClick={sortAZ}>Sorteeri A-Z</button>
					<button onClick={sortZA}>Sorteeri Z-A</button>
					<button onClick={sortTähedKasvavalt}>Sorteeri kasvavalt</button>
					<button onClick={sortTähedKahanevalt}>Sorteeri kahanevalt</button>
					<button onClick={sortKolmasTähtAZ}>Sorteeri kolmas AZ</button>
					<br />
					<button onClick={filterE}>Jäta alles 'e'ga lõppevad </button>
					<button onClick={filter9}>Jäta alles 9 tähelised </button>
					<button onClick={filter7}>Jäta alles vähemalt 7 tähelised </button>
					<button onClick={filterIs}>Jäta alles kes sisaldavad 'is' lühendit </button>
					<button onClick={filter3}>Jäta alles kellel on kolmas täht 'i' </button>
				</div>
			)}

			{linn === 'Tartu' && (
				<div>
					<div>Järveotsa</div>
					<div>Raatuse</div>
				</div>
			)}

			{linn === 'Narva' && (
				<div>
					<div>Fama</div>
				</div>
			)}

			{linn === 'Pärnu' && (
				<div>
					<div>Port Artur 2</div>
				</div>
			)}

			<Link to='/'>
				<button>Tagasi</button>
			</Link>
		</div>
	);
}

export default Esindused;
