import React from 'react';
import tootajaJSON from '../data/tootaja.json';
import { useParams } from 'react-router-dom';
function YksTootaja() {
	const { index } = useParams();
	const tootaja = tootajaJSON[index];

	if (tootaja === undefined) {
		return <div>Sellist töötajat ei eksisteeri</div>;
	}
	return (
		<div>
			<div>Tegemist on: {tootaja.nimi}</div>
			<div>Tema vanus: {tootaja.vanus}</div>
			<div>Tema elukoht: {tootaja.elukoht}</div>
			<div>Tema number: {tootaja.number}</div>
		</div>
	);
}

export default YksTootaja;
