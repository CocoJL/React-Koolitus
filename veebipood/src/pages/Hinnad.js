import React, { useRef, useState } from 'react';
import hinnadJSON from '../data/hinnad.json';

function Hinnad() {
	const [hinnad, setHinnad] = useState(hinnadJSON);
	const hindRef = useRef();
	const original = () => {
		setHinnad(hinnadJSON);
	};

	const sorteeriA = () => {
		hinnad.sort();
		setHinnad(hinnad.slice());
	};

	const sorteeriZ = () => {
		hinnad.sort((a, b) => b.toString().localeCompare(a.toString()));
		setHinnad(hinnad.slice());
	};

	const sorteeriKasvavalt = () => {
		hinnad.sort((a, b) => a - b);
		setHinnad(hinnad.slice());
	};

	const sorteeriKahanevalt = () => {
		hinnad.sort((a, b) => b - a);
		// hinnad.sort((a, b) => -1 * (a - b)); SELLINE 50/50 VARJANT
		// hinnad.reverse(); PIGEM EI KASUTAKS SEDA VARJANTI
		setHinnad(hinnad.slice());
	};

	const filterOver50 = () => {
		const vastus = hinnad.filter((hind) => hind > 50);
		setHinnad(vastus);
	};

	const filterLess50 = () => {
		const vastus = hinnad.filter((hind) => hind < 50);
		setHinnad(vastus);
	};

	const lisaHind = () => {
		hinnad.push(hindRef.current.value);
		setHinnad(hinnad.slice());
		hindRef.current.value = '';
	};

	const kustutaEsimene = () => {
		hinnad.splice(0, 1);
		setHinnad(hinnad.slice());
	};
	const kustutaTeine = () => {
		hinnad.splice(1, 1);
		setHinnad(hinnad.slice());
	};
	const kustutaKolmas = () => {
		hinnad.splice(2, 1);
		setHinnad(hinnad.slice());
	};
	const kustutaNeljas = () => {
		hinnad.splice(3, 1);
		setHinnad(hinnad.slice());
	};

	const kustutaHind = (e) => {
		hinnad.splice(e, 1);
		setHinnad(hinnad.slice());
	};
	return (
		<div>
			<div>
				<div>Hindade koguarv: {hinnad.length}</div>
				<button onClick={() => setHinnad([])}>Tühjenda</button>
				<button onClick={sorteeriA}>Sorteeri A-Z</button>
				<button onClick={sorteeriZ}>Sorteeri Z-A</button>
				<button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
				<button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
				<br /> <br />
				<button onClick={original}>Originaali</button> <br />
				<button onClick={filterOver50}>Jäta alles suuremad kui 50</button>
				<button onClick={filterLess50}>Jäta alles väiksemad kui 50</button>
				<br />
				<br />
				<button disabled={hinnad.length < 1} onClick={kustutaEsimene}>
					Kustuta esimene
				</button>
				<button disabled={hinnad.length < 2} onClick={kustutaTeine}>
					Kustuta teine
				</button>
				<button disabled={hinnad.length < 3} onClick={kustutaKolmas}>
					Kustuta kolmas
				</button>
				<button disabled={hinnad.length < 4} onClick={kustutaNeljas}>
					Kustuta neljas
				</button>
				<br /> <br />
				<label>Uus hind</label>
				<input ref={hindRef} type='text' />
				<button onClick={lisaHind}>Lisa</button>
				{hinnad.map((hind, e) => (
					<div>
						{hind}
						<button onClick={() => kustutaHind(e)}>x</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Hinnad;
