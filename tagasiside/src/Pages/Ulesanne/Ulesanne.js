import React, { useState } from 'react';
import ulesanneJSON from '../Ulesanne/ulesanne.json';
function Ulesanne() {
	const [data, setData] = useState(ulesanneJSON);

	const showAll = () => {
		setData(ulesanneJSON);
	};

	const showOver10 = () => {
		const vastus = data.filter((element) => element.username.length >= 10);
		setData(vastus);
	};

	const findIndexDelete = (kasutaja) => {
		const index = data.indexOf(kasutaja);
		data.splice(index, 1);
		setData(data.slice());
	};

	const findIndex = () => {
		const vastus = data.findIndex(
			(kasutaja) => kasutaja.email === 'Lucio_Hettinger@annie.ca'
		);
		console.log(vastus);
	};

	const firstLetter = () => {
		const vastus = data.find(
			(kasutaja) => kasutaja.name.substring(0, 1) === 'C'
		);
		console.log(vastus);
	};

	const sortLat = () => {
		data.sort((a, b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
		setData(data.slice());
	};

	const filterLat = () => {
		const vastus = data.filter((element) => element.address.geo.lng > 0);
		setData(vastus);
	};

	const id = () => {
		let sum = 0;
		data.forEach((element) => {
			sum += element.id;
		});
		console.log(sum);
	};

	const phone = () => {
		const result = data.map((element) => ({
			...element,
			phone: '000' + element.phone,
		}));
		setData(result);
	};

	const email = () => {
		const result = data.map((el) => el.email);
		console.log(result);
	};

	const replace = () => {
		const result = data.map((user) => ({
			...user,
			company: {
				...user.company,
				catchPhrase: user.company.catchPhrase.replaceAll('a', 'e'),
			},
		}));
		setData(result);
	};
	return (
		<div>
			<div>
				<button onClick={showAll}>Show all</button>
				<button onClick={showOver10}>10 tähte või rohkem</button>
				<button onClick={findIndexDelete}>Otsi ja kustuta</button>
				<button onClick={findIndex}>Otsi email</button>
				<button onClick={firstLetter}>Esimene t2ht</button>
				<button onClick={sortLat}>Geo lat</button>
				<button onClick={filterLat}>Pos lat</button>
				<button onClick={id}>ID</button>
				<button onClick={phone}>phone</button>
				<button onClick={email}>email</button>
				<button onClick={replace}>result</button>

				{data.map((element) => (
					<div>
						<div>{element.name}</div>
						<div>{element.username}</div>
						<div>{element.email}</div>
						<div>{element.address.street}</div>
						<div>{element.address.suite}</div>
						<div>{element.address.city}</div>
						<div>{element.address.zipcode}</div>
						<div>{element.address.geo.lat}</div>
						<div>{element.address.geo.lng}</div>
						<div>{element.phone}</div>
						<div>{element.website}</div>
						<div>{element.company.name}</div>
						<div>{element.company.catchPhrase}</div>
						<div>{element.company.bs}</div>
						<br />
					</div>
				))}
			</div>
		</div>
	);
}

export default Ulesanne;
