import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

function MuudaUudis() {
	const { index } = useParams();
	const uudisRef = useRef();
	const uudis = JSON.parse(localStorage.getItem('uudised')) || [];

	const leitud = uudis[index];

	const muuda = () => {
		leitud.uusUudis = uudisRef.current.value;
		localStorage.setItem('uudised', JSON.stringify(uudis));
	};
	return (
		<div>
			<div>
				<label>Muuda uudist</label> <br />
				<input defaultValue={leitud.uusUudis} type='text' ref={uudisRef} />{' '}
				<br />
				<button onClick={muuda}>Muuda</button>
			</div>
		</div>
	);
}

export default MuudaUudis;
