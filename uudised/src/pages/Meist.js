import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Meist() {
	const [telefon, setTelefon] = useState('');
	const [valitud, setValitud] = useState('');
	const tootajad = [
		{
			nimi: 'Edward von Lõngus',
			ala: 'Uudiste kujundamine',
			telefon: '+3131231231',
		},

		{
			nimi: 'Arvo Pärt',
			ala: 'Uudisklippide taustamuusika',
			telefon: '+31312312',
		},
		{ nimi: 'Kelly Sildaru', ala: 'Püstolreporter', telefon: '+313124123' },

		{
			nimi: 'Kerli Kõiv',
			ala: 'Välisturgude spetsialist',
			telefon: '+312312312',
		},
	];

	const uhendust = (tootaja) => {
		setTelefon(tootaja.telefon);
		setValitud(tootaja.nimi);
	};
	return (
		<div>
			<div>See leht on meie töötajatest</div>
			<div>Valitud: {valitud}</div> <br />
			{tootajad.map((tootaja, index) => (
				<div
					key={index}
					className={tootaja.nimi === valitud ? 'valitud' : undefined}
				>
					<div>{tootaja.nimi}</div>
					<div>{tootaja.ala}</div>
					<div>
						<button onClick={() => uhendust(tootaja)}>Võta ühendust</button>
					</div>{' '}
					<br />
				</div>
			))}
			<div>
				<Link to='/'>
					<button>Tagasi</button>
				</Link>
			</div>
		</div>
	);
}

export default Meist;
