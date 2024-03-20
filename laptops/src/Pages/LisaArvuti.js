import React, { useRef } from 'react';
import { useState } from 'react';

function LisaArvuti() {
	const [message, setMessage] = useState('Lisa arvuti!');

	const markRef = useRef();
	const mudelRef = useRef();
	const hindRef = useRef();

	function addProduct() {
		setMessage('Lisatud, aitäh!');

		const newComputer = {
			mark: markRef.current.value,
			mudel: mudelRef.current.value,
			hind: hindRef.current.value,
		};

		const computers = JSON.parse(localStorage.getItem('laptops')) || [];
		computers.push(newComputer);
		localStorage.setItem('laptops', JSON.stringify(computers));
	}

	return (
		<div>
			<div>Sõnum: {message}</div>
			<label>Mark</label> <br />
			<input type='text' ref={markRef} /> <br />
			<label>Mudel</label> <br />
			<input type='text' ref={mudelRef} /> <br />
			<label>Maksumus</label> <br />
			<input type='number' ref={hindRef} /> <br />
			<button onClick={addProduct}>Lisa</button>
		</div>
	);
}

export default LisaArvuti;
