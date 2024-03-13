import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Kontakt() {
	const [kontaktKris, muudaKontaktKris] = useState(false);
	const [kontaktYlemiste, muudaKontaktYlemiste] = useState(false);
	const [kontaktTasku, muudaKontaktTasku] = useState(false);
	const [valitud, setValitud] = useState(false);
	return (
		<div>
			<div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
			<div
				className={valitud === true ? 'valitud' : undefined}
				onClick={() => setValitud(!valitud)}
			>
				Võta meiega ühendust:
			</div>
			<br />

			<div
				className={kontaktKris === true ? 'valitud' : undefined}
				onClick={() => muudaKontaktKris(!kontaktKris)}
			>
				Kristiine keskus
			</div>
			{kontaktKris && <div className='valitud'>+351231231</div>}
			<div className={kontaktKris === true ? 'valitud' : undefined}>
				Endla 45
			</div>
			<br />

			<div
				className={kontaktYlemiste === true ? 'valitud' : undefined}
				onClick={() => muudaKontaktYlemiste(!kontaktYlemiste)}
			>
				Ülemiste keskus
			</div>
			{kontaktYlemiste && <div className='valitud'>+34151231</div>}
			<div className={kontaktYlemiste === true ? 'valitud' : undefined}>
				Suur-Sõjamäe 4
			</div>
			<br />

			<div
				className={kontaktTasku === true ? 'valitud' : undefined}
				onClick={() => muudaKontaktTasku(!kontaktTasku)}
			>
				Tasku keskus
			</div>
			{kontaktTasku && <div className='valitud'>+39312323</div>}
			<div className={kontaktTasku === true ? 'valitud' : undefined}>
				Turu 2
			</div>

			<Link to='/'>
				<button>Tagasi</button>
			</Link>
		</div>
	);
}

export default Kontakt;
