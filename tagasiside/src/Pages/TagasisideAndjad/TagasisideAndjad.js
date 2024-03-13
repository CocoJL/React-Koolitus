import './tagasisideandjad.css';
import nimedJSON from '../TagasisideAndjad/nimed.json';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
function TagasisideAndjad() {
	const [nimed, setNimed] = useState(nimedJSON);
	const lisaNimiRef = useRef();

	const sortNameM = () => {
		const result = nimed.filter((e) => e.startsWith('M'));
		setNimed(result);
	};

	const sortName6 = () => {
		const result = nimed.filter((e) => e.length === 6);
		setNimed(result);
	};

	const sortEndY = () => {
		const result = nimed.filter((e) => e.endsWith('y'));
		setNimed(result);
	};

	const sortZA = () => {
		nimed.sort((a, b) => b.localeCompare(a));
		setNimed(nimed.slice());
	};

	const writeEst = () => {
		for (let i = 0; i < nimed.length; i++) {
			nimed[i] = 'EST ' + nimed[i];
		}
		setNimed(nimed.slice());
	};

	const deleteX = (e) => {
		nimed.splice(e, 1);
		setNimed(nimed.slice());
	};

	const addName = () => {
		nimed.push(lisaNimiRef.current.value);
		setNimed(nimed.slice());
		lisaNimiRef.current.value = '';
	};

	return (
		<div>
			Nimesid on kokku: {nimed.length} <br />
			<button onClick={sortNameM}>Nimed, mis algavad M tähega</button>
			<button onClick={sortName6}>Nimed, mis on kõik 6 tähega</button>
			<button onClick={sortEndY}>Nimed, mis lõppevad kõik y-ga</button>
			<button onClick={sortZA}>Sorteeri nimed Z-A</button>
			<button onClick={writeEst}>Kirjuta nime ette EST</button>
			{nimed.map((nimi, e) => (
				<div key={nimi}>
					<br />
					{nimi}
					<br />
					<button onClick={() => deleteX(e)}>x</button>
					<Link to={'/yks-tagasiside/' + e}>
						<button>Vaata lähemalt</button>
					</Link>
				</div>
			))}
			<label>Lisa uus nimi</label>
			<input type='text' ref={lisaNimiRef} />
			<button onClick={addName}>Lisa</button>
		</div>
	);
}

export default TagasisideAndjad;
