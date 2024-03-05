import React, { useRef, useState } from 'react';
import tootajaJSON from '../data/tootaja.json';

function Töötajad() {
	// Kuva koik tootajad
	// ["Urmet", "Kaido", "Liina", "Maiki", "Heidi", "Epp", "Kaire", "Anet", "Maarja", "Ave", "Annika", "Mihkel" ]
	// naita valja koguarv
	// voimalda tuhjendada

	// Sorteeri: A-Z
	// Sorteeri: Z-A
	// Tahemargid kasvavalt
	// Tahemargid kahanevalt
	// teine taht A-Z
	// kolmast taht Z-A

	// filtreeri:
	// kolmetahelised
	// rohkem kui 5 tahelsied
	// 'ai' luhendit sisaldavad
	// kellel on kolmas taht 'i'
	// algavad 'a' tahega

	// paarisarv tahti
	// igatuht saaks kustutada
	// saaks lisada igatuht juurde
	//

	const [worker, setWorker] = useState(tootajaJSON);
	const addRef = useRef();

	const emptyAll = () => {
		setWorker(worker.splice());
	};

	const reset = () => {
		setWorker(tootajaJSON);
	};

	const sortAZ = () => {
		worker.sort((a, b) => a.localeCompare(b));
		setWorker(worker.slice());
	};

	const sortZ = () => {
		worker.sort((a, b) => b.localeCompare(a));
		setWorker(worker.slice());
	};

	const sortGrow = () => {
		worker.sort((a, b) => a - b);
		setWorker(worker.slice());
	};

	const sortLess = () => {
		worker.sort((a, b) => b - a);
		setWorker(worker.slice());
	};

	const sortSecondAZ = () => {
		worker.sort((a, b) => a[1].localeCompare(b[1]));
		setWorker(worker.slice());
	};

	const sortThirdZA = () => {
		worker.sort((a, b) => b[2].localeCompare(a[2]));
		setWorker(worker.slice());
	};

	const filterThree = () => {
		const vastus = worker.filter((worker) => worker.length === 3);
		setWorker(vastus);
	};

	const filterMoreFive = () => {
		const vastus = worker.filter((worker) => worker.length > 5);
		setWorker(vastus);
	};

	const filterAi = () => {
		const vastus = worker.filter((worker) => worker.includes('ai'));
		setWorker(vastus);
	};

	const filterThirdI = () => {
		const vastus = worker.filter((worker) => worker.charAt(2) === 'i');
		setWorker(vastus);
	};

	const filterStartA = () => {
		const vastus = worker.filter((worker) => worker.startsWith('a'));
		setWorker(vastus);
	};

	const filterPaaris = () => {
		const vastus = worker.filter((worker) => worker.length % 2 === 0);
		setWorker(vastus);
	};

	const deleteWorker = (e) => {
		worker.splice(e, 1);
		setWorker(worker.slice());
	};

	const addWorker = () => {
		worker.push(addRef.current.value);
		setWorker(worker.slice());
		addRef.current.value = '';
	};
	return (
		<div className='tootajad'>
			<div>
				<div>Kogu arv töölisi: {worker.length}</div>
				{worker.map((work, e) => (
					<div>
						{work}
						<button onClick={() => deleteWorker(e)}>x</button>
					</div>
				))}
			</div>
			<label>Lisa juurde</label>
			<input type='text' ref={addRef} />
			<button onClick={addWorker}>Lisa</button>
			<br />
			<button onClick={emptyAll}>Tühjenda kõik</button>
			<button onClick={reset}>Näita</button>
			<button onClick={sortAZ}>Sorteeri A-Z</button>
			<button onClick={sortZ}>Sorteeri Z-A</button>
			<button onClick={sortGrow}>Sorteeri kasvavalt</button>
			<button onClick={sortLess}>Sorteeri kahanevalt</button>
			<button onClick={sortSecondAZ}>Sorteeri teine täht A-Z</button>
			<button onClick={sortThirdZA}>Sorteeri kolmas täht Z-A</button> <br />
			<button onClick={filterThree}>Filtreeri 3 tähelised</button>
			<button onClick={filterMoreFive}>Filtreeri rohkem kui 5 tähelised</button>
			<button onClick={filterAi}>Sisaldavad ai</button>
			<button onClick={filterThirdI}>Sisaldab kolmast täht i</button>
			<button onClick={filterStartA}>Algab a tähega</button>
			<button onClick={filterPaaris}>Paarisarv tähti</button>
		</div>
	);
}

export default Töötajad;
