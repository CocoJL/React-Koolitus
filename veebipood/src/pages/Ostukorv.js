import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Ostukorv() {
	const [ostukorv, setOstukorv] = useState(['Coca', 'Fanta', 'Sprite']);

	const kustutaToode = (e) => {
		ostukorv.splice(e, 1);
		setOstukorv(ostukorv.slice());
	};
	return (
		<div>
			<div>Ostukorv</div>

			<div>Ostukorvis on hetkel: {ostukorv.length} eset</div>
			{ostukorv.length === 0 && (
				<div className='ostukorv'>
					<img src='https://as2.ftcdn.net/v2/jpg/00/33/04/93/1000_F_33049387_PCNOkj6P1V84bB38LcoC19qshygMAYAP.jpg' alt='empty shopping cart' />
					<p>Ostukorv on hetkel tühi.</p>
				</div>
			)}

			<button onClick={() => setOstukorv(['Coca', 'Fanta'])}>Jäta alles Coca ja Fanta</button>

			<button onClick={() => setOstukorv([])}>Tühjenda</button>

			<div>
				{ostukorv.map((toode, e) => (
					<div key={e}>
						{toode}
						<button onClick={() => kustutaToode(e)}>x</button>
					</div>
				))}
			</div>

			<Link to='/'>
				<button>Tagasi</button>
			</Link>
		</div>
	);
}

export default Ostukorv;
