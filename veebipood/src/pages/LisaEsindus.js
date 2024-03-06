import React, { useRef, useState } from 'react';
import tallinnJSON from '../data/tallinn.json';
function LisaEsindus() {
	const [esindus, setEsindus] = useState();
	const lisaEsindusRef = useRef();

	const addKeskus = () => {
		tallinnJSON.push(lisaEsindusRef.current.value);
		setEsindus(tallinnJSON.slice());
		lisaEsindusRef.current.value = '';
	};
	return (
		<div>
			<label>Lisa esindus</label>
			<input type='text' ref={lisaEsindusRef} />
			<button onClick={addKeskus}>Lisa uus esindus</button>
		</div>
	);
}

export default LisaEsindus;
