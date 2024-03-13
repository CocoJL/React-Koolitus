import React from 'react';
import tootajaJSON from '../data/tootaja.json';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
function MuudaTootaja() {
	const { index } = useParams();
	const tootaja = tootajaJSON[index];
	const nimiRef = useRef();
	const numberRef = useRef();
	const elukohtRef = useRef();
	const vanusRef = useRef();

	const muuda = () => {
		tootajaJSON[index] = {
			nimi: nimiRef.current.value,
			number: numberRef.current.value,
			elukoht: elukohtRef.current.value,
			vanus: vanusRef.current.value,
		};
		nimiRef.current.value = '';
		numberRef.current.value = '';
		elukohtRef.current.value = '';
		vanusRef.current.value = '';
	};
	return (
		<div>
			<div>Muuda infot</div>
			<label>Tootaja nimi: </label>
			<input defaultValue={tootaja.nimi} type='text' ref={nimiRef} /> <br />
			<label>Tootaja number:</label>
			<input defaultValue={tootaja.number} type='number' ref={numberRef} />{' '}
			<br />
			<label>Tootaja elukoht:</label>
			<input type='text' defaultValue={tootaja.elukoht} ref={elukohtRef} />
			<br />
			<label>Tootaja vanus:</label>
			<input type='number' defaultValue={tootaja.vanus} ref={vanusRef} /> <br />
			<button onClick={muuda}>Muuda</button>
		</div>
	);
}

export default MuudaTootaja;
