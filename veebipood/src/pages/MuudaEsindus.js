import React from 'react';
import { useParams } from 'react-router-dom';
import esindusedJSON from '../data/tallinn.json';
import { useRef } from 'react';
function MuudaEsindus() {
	const { index } = useParams();
	const esindus = esindusedJSON[index];
	const esindusRef = useRef();

	const muuda = () => {
		esindusedJSON[index] = {
			nimi: esindusRef.current.value,
		};
		esindusRef.current.value = '';
	};

	return (
		<div>
			<label>Esindus</label> <br />
			<input defaultValue={esindus.nimi} type='text' ref={esindusRef} /> <br />
			<button onClick={muuda}>Muuda</button>
		</div>
	);
}

export default MuudaEsindus;
