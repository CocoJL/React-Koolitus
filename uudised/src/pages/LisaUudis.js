import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
function LisaUudis() {
	const lisaUudisRef = useRef();
	const [sonum, setSonum] = useState('');
	const lisaUudis = () => {
		const uudis = {
			uusUudis: lisaUudisRef.current.value,
		};

		const uudised = JSON.parse(localStorage.getItem('uudised')) || [];
		uudised.push(uudis);
		localStorage.setItem('uudised', JSON.stringify(uudised));
	};

	const kontrolli = () => {
		setSonum('');
		if (
			lisaUudisRef.current.value.charAt(0) ===
			lisaUudisRef.current.value.charAt(0).toLowerCase()
		) {
			setSonum('Sisestasid uudise väikse tähega, palun paranda');
		}
		if (lisaUudisRef.current.value.includes('  ')) {
			setSonum('Sisestasid kaks tühikut, palun paranda!');
		}
	};

	return (
		<div>
			<div>{sonum}</div>
			<label>Lisa uus uudis</label> <br />
			<input onChange={kontrolli} type='text' ref={lisaUudisRef} /> <br />
			<button onClick={lisaUudis}>Lisa uudis</button>
			<Link to='/'>
				<button>Tagasi</button>
			</Link>
		</div>
	);
}

export default LisaUudis;
