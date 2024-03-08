import React, { useRef } from 'react';
import tootedJSON from '../data/tooted.json';
import { useParams } from 'react-router-dom';

function MuudaToode() {
	const { indeks } = useParams();
	const leitud = tootedJSON[indeks];
	const nimiRef = useRef();
	const hindRef = useRef();
	const piltRef = useRef();
	const aktiivneRef = useRef();

	if (leitud === undefined) {
		return <div>Toodet ei leitud</div>;
	}

	const muuda = () => {
		tootedJSON[indeks] = {
			nimi: nimiRef.current.value,
			hind: Number(hindRef.current.value),
			aktiivne: aktiivneRef.current.checked,
			pilt: piltRef.current.value,
		};
	};

	return (
		<div>
			<br />
			<label>Nimi</label> <br />
			<input defaultValue={leitud.nimi} type='text' ref={nimiRef} /> <br />
			<label>Hind</label> <br />
			<input defaultValue={leitud.hind} type='number' ref={hindRef} /> <br />
			<label>Pilt</label> <br />
			<input defaultValue={leitud.pilt} type='text' ref={piltRef} /> <br />
			<label>Aktiivne</label> <br />
			<input
				defaultValue={leitud.aktiivne}
				type='checkbox'
				ref={aktiivneRef}
			/>{' '}
			<br />
			<button onClick={muuda}>Muuda</button>
		</div>
	);
}

export default MuudaToode;
