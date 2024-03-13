import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import tootedJSON from '../data/tooted.json';

function LisaToode() {
	const [sonum, uuendaSonum] = useState('');
	const nimiRef = useRef();
	const hindRef = useRef();
	const piltRef = useRef();
	const aktiivneRef = useRef();

	const lisa = () => {
		if (nimiRef.current.value === '') {
			uuendaSonum('Palun lisa toode');
		} else {
			uuendaSonum(
				'Toote nimi: ' +
					nimiRef.current.value +
					', Kategooria nimi: ' +
					hindRef.current.value
			);

			tootedJSON.push({
				nimi: nimiRef.current.value,
				hind: Number(hindRef.current.value),
				aktiivne: aktiivneRef.current.checked,
				pilt: piltRef.current.value,
			});
		}
	};

	// const lisaUusTegelane {
	// ss
	// }

	return (
		<div>
			<div>LisaToode</div>
			<div>
				bv
				<h1>The input element</h1>
				<label>Toote nimi: </label>
				<input ref={nimiRef} type='text' />
				<br /> <br />
				<label>Toote hind: </label>
				<input ref={hindRef} type='number' />
				<br /> <br />
				<label>Toote pilt: </label>
				<input ref={piltRef} type='text' />
				<br /> <br />
				<label>Toode aktiivne: </label>
				<input ref={aktiivneRef} type='checkbox' />
				<br /> <br />
				<button onClick={lisa}>Sisesta</button>
				<p style={{ color: 'white', backgroundColor: 'hsla(0, 0%, 0%, 0.50)' }}>
					{sonum}
				</p>
			</div>

			<Link to='/'>
				<button>Tagasi</button>
			</Link>
		</div>
	);
}

export default LisaToode;
