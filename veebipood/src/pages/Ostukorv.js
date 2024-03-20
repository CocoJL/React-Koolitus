import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ostukorvJSON from '../data/ostukorv.json';
import { ToastContainer, toast } from 'react-toastify';
function Ostukorv() {
	const [ostukorv, setOstukorv] = useState(ostukorvJSON);

	const kustutaToode = (e) => {
		ostukorvJSON.splice(e, 1);
		setOstukorv(ostukorvJSON.slice());
		toast.success('Edukalt kustatud');
	};

	const lisaOstukorvi = (toode) => {
		ostukorvJSON.push(toode);
		setOstukorv(ostukorvJSON.slice());
		toast.success('Edukalt juurde lisatud');
	};

	const arvutaKogusumma = () => {
		let summa = 0;
		ostukorv.forEach((toode) => (summa += toode.hind));
		return summa;
	};
	return (
		<div>
			<div>Ostukorv</div>

			<div>Ostukorvis on hetkel: {ostukorv.length} eset</div>
			{ostukorv.length === 0 && (
				<div className='ostukorv'>
					<img
						src='https://as2.ftcdn.net/v2/jpg/00/33/04/93/1000_F_33049387_PCNOkj6P1V84bB38LcoC19qshygMAYAP.jpg'
						alt='empty shopping cart'
					/>
					<p>Ostukorv on hetkel tühi.</p>
				</div>
			)}

			<button onClick={() => setOstukorv([])}>Tühjenda</button>

			<div>
				{ostukorv.map((toode, e) => (
					<div key={e}>
						{toode.nimi} {toode.hind}€
						<button onClick={() => kustutaToode(toode)}>x</button>
						<button onClick={() => lisaOstukorvi(toode)}>Lisa</button>
					</div>
				))}
			</div>

			<div>Summa: {arvutaKogusumma()} €</div>

			<Link to='/'>
				<button>Tagasi</button>
			</Link>
			<ToastContainer />
		</div>
	);
}

export default Ostukorv;
