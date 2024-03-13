import React, { useState } from 'react';
import tegevusedJSON from '../Tegevused/tegevused.json';
function Tegevused() {
	const [tegevused, setTegevused] = useState(tegevusedJSON);
	const user1 = () => {
		const vastus = tegevused.filter((element) => element.userId === 1);
		setTegevused(vastus);
	};

	const user2 = () => {
		const vastus = tegevused.filter((element) => element.userId === 2);
		setTegevused(vastus);
	};

	const user3 = () => {
		const vastus = tegevused.filter((element) => element.userId === 3);
		setTegevused(vastus);
	};

	const completed = () => {
		const vastus = tegevused.filter((element) => element.completed === true);
		setTegevused(vastus);
	};

	const notCompleted = () => {
		const vastus = tegevused.filter((element) => element.completed === false);
		setTegevused(vastus);
	};

	const firstT = () => {
		const vastus = tegevused.filter((element) => element.title.startsWith('t'));
		setTegevused(vastus);
	};

	const moreThan20 = () => {
		const vastus = tegevused.filter((element) => element.title.length > 20);
		setTegevused(vastus);
	};

	return (
		<div>
			<div>Kogu tegevuste arv: {tegevused.length}</div>
			<button onClick={user1}>Kuva kasutaja 1 tegevused</button>
			<button onClick={user2}>Kuva kasutaja 2 tegevused</button>
			<button onClick={user3}>Kuva kasutaja 3 tegevused</button>
			<button onClick={completed}>Kuva kõik valmis tegevused</button>
			<button onClick={notCompleted}>Kuva kõik mitte valmis tegevused</button>
			<button onClick={firstT}>Algab t tähega</button>
			<button onClick={moreThan20}>Rohkem kui 20</button>
			{tegevused.map((tegevus) => (
				<div>
					<div>{tegevus.userId}</div>
					<div>{tegevus.id}</div>
					<div>{tegevus.title}</div>
					<div>{tegevus.completed}</div>
				</div>
			))}
		</div>
	);
}

export default Tegevused;
