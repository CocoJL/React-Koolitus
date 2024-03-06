import { useState } from 'react';
import './numbrid.css';

function Numbrid() {
	const [number, setNumber] = useState([4, 23, 7, 41, 214, 0, 12, 59, 15, 33]);

	const reset = () => {
		setNumber([4, 23, 7, 41, 214, 0, 12, 59, 15, 33]);
	};

	const numberAscending = () => {
		number.sort((a, b) => a - b);
		setNumber(number.slice());
	};

	const numberDescending = () => {
		number.sort((a, b) => b - a);
		setNumber(number.slice());
	};

	const numberSort = () => {
		number.sort();
		setNumber(number.slice());
	};

	const numberSortReverse = () => {
		number.sort().reverse();
		setNumber(number.slice());
	};

	const filterBiggerThan8 = () => {
		const result = number.filter((numbers) => numbers > 8);
		setNumber(result);
	};

	const filterLessThan10 = () => {
		const result = number.filter((numbers) => numbers < 10);
		setNumber(result);
	};

	const filterEven = () => {
		const result = number.filter((numbers) => numbers % 2 === 0);
		setNumber(result);
	};

	const filterUneven = () => {
		const result = number.filter((numbers) => numbers % 2 === 1);
		setNumber(result);
	};

	const filterStartWith1 = () => {
		const result = number.filter((numbers) => numbers.toString().startsWith(1));
		setNumber(result);
	};

	const filterIncludes3 = () => {
		const result = number.filter((numbers) => numbers.toString().includes(3));
		setNumber(result);
	};

	return (
		<div>
			{number.map((numbers) => (
				<div>{numbers}</div>
			))}
			<button onClick={reset}>Originaali</button>
			<button onClick={numberAscending}>Number +</button>
			<button onClick={numberDescending}>Number -</button>
			<button onClick={numberSort}>Number tähestikku</button>
			<button onClick={numberSortReverse}>Number tähestikku vastupidi</button>
			<br />
			<button onClick={filterBiggerThan8}>Number suurem kui 8</button>
			<button onClick={filterLessThan10}>Number väiksem kui 10</button>
			<button onClick={filterEven}>Paarisarvud</button>
			<button onClick={filterUneven}>Paaritudarvud</button>
			<button onClick={filterStartWith1}>Algab 1ga</button>
			<button onClick={filterIncludes3}>Sisaldab 3</button>
		</div>
	);
}

export default Numbrid;
