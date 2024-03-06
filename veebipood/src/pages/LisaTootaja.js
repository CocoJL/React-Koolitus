import React, { useRef, useState } from 'react';
import tootajaJSON from '../data/tootaja.json';
function LisaTootaja() {
	const [lisa, setLisa] = useState(tootajaJSON);
	const lisaTootajaRef = useRef();
	const lisaTootaja = () => {
		tootajaJSON.push(lisaTootajaRef.current.value);
		setLisa(tootajaJSON.slice());
		lisaTootajaRef.current.value = '';
	};
	return (
		<div>
			<label>Lisa tootaja</label>
			<input type='text' ref={lisaTootajaRef} />
			<button onClick={lisaTootaja}>Lisa tootaja</button>
		</div>
	);
}

export default LisaTootaja;
