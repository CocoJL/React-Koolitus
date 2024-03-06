import React, { useState } from 'react';
import hinnadJSON from '../data/hinnad.json';

function Hinnad() {
	const [hinnad, setHinnad] = useState(hinnadJSON);

	const originaali = () => {
		setHinnad(hinnadJSON);
	};

	const sorteeriAZ = () => {
		hinnad.sort();
		setHinnad(hinnad.slice());
	};

	const sorteeriZA = () => {
		hinnad.sort((a, b) => b.toString().localeCompare(a.toString()));
		setHinnad(hinnad.slice());
	};

	const sorteeriKasvavalt = () => {
		hinnad.sort((a, b) => a - b);
		setHinnad(hinnad.slice());
	};

	const sorteeriKahanevalt = () => {
		hinnad.sort((a, b) => b - a);
		//hinnad.sort((a, b) => -1 * (a - b));
		// hinnad.reverse();
		setHinnad(hinnad.slice());
	};

	const filtreeriSuuremKui50 = () => {
		const vastus = hinnad.filter((hind) => hind > 50);
		setHinnad(vastus);
	};

	const filtreeriVaiksemKui20 = () => {
		const vastus = hinnad.filter((hind) => hind < 20);
		setHinnad(vastus);
	};

	const arvutaKokku = () => {
		let summa = 0;
		hinnad.forEach((hind) => (summa += hind));
		return summa;
	};

	return (
		<div>
			<div>Hindade kogusumma: {arvutaKokku()} €</div>
			<div>Hindade koguarv: {hinnad.length} tk</div>
			<button onClick={originaali}>Originaali</button>
			<button onClick={() => setHinnad([])}>Peida ajutiselt</button>
			<br />
			<br />
			<button onClick={sorteeriAZ}>Sorteeri A-Z</button>
			<button onClick={sorteeriZA}>Sorteeri Z-A</button>

			<button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
			<button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>

			<br />
			<br />

			<button onClick={filtreeriSuuremKui50}>Jäta alles suuremad kui 50</button>
			<button onClick={filtreeriVaiksemKui20}>Jäta alles väiksemad kui 20</button>

			<br />
			<br />

			{hinnad.map((hind, index) => (
				<div key={index}>{hind}</div>
			))}
		</div>
	);
}

export default Hinnad;
