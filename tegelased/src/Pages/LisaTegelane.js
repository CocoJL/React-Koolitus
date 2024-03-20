import React, { useRef, useState } from 'react';
// import { useState } from "react";

function LisaTegelane() {
	const eesRef = useRef();
	const pereRef = useRef();
	const eluRef = useRef();
	const vanusRef = useRef();
	const [sonum, uuendaSonum] = useState('');

	const lisaTegelane = () => {
		if (eesRef.current.value === '') {
			uuendaSonum('Tühja nimega ei saa lisada');
		} else {
			uuendaSonum('Tegelane lisatud');
			const tegelased = JSON.parse(localStorage.getItem('tegelased')) || [];
			tegelased.push({
				eesnimi: eesRef.current.value,
				perenimi: pereRef.current.value,
				elukoht: eluRef.current.value,
				vanus: Number(vanusRef.current.value),
			});
			localStorage.setItem('tegelased', JSON.stringify(tegelased));
		}
	};

	return (
		<div>
			<div>Lisa uus tegelane</div> <br />
			<label>Eesnimi</label> <br />
			<input type='text' ref={eesRef} /> <br />
			<label>Perenimi</label> <br />
			<input type='text' ref={pereRef} /> <br />
			<label>Elukoht</label> <br />
			<input type='text' ref={eluRef} /> <br />
			<label>Vanus</label> <br />
			<input type='number' ref={vanusRef} /> <br />
			<button onClick={lisaTegelane}>Lisa</button>
		</div>
	);
}

export default LisaTegelane;
