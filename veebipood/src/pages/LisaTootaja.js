import React, { useRef } from 'react';
import tootajaJSON from '../data/tootaja.json';
import { useState } from 'react';

function LisaTootaja() {
	const nimiRef = useRef();
	const numberRef = useRef();
	const elukohtRef = useRef();
	const vanusRef = useRef();
	const [sonum, setSonum] = useState('Palun lisa uus töötaja');
	const lisa = () => {
		if (nimiRef.current.value === '') {
			return setSonum('Palun sisesta töötaja');
		} else {
			setSonum('Töötaja andmed on lisatud: ' + nimiRef.current.value);
		}
		tootajaJSON.push({
			nimi: nimiRef.current.value,
			number: numberRef.current.value,
			elukoht: elukohtRef.current.value,
			vanus: vanusRef.current.value,
		});
	};

	return (
		<div>
			<div>{sonum}</div>
			<label>Nimi: </label>
			<input type='text' ref={nimiRef} /> <br />
			<label>Number:</label>
			<input type='number' ref={numberRef} /> <br />
			<label>Elukoht:</label>
			<input type='text' ref={elukohtRef} /> <br />
			<label>Vanus: </label>
			<input type='text' ref={vanusRef} /> <br />
			<button onClick={lisa}>Lisa</button>
		</div>
	);
}

export default LisaTootaja;
