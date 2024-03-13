import { useRef, useState } from 'react';
import './tagasiside.css';
function Tagasiside() {
	const [tagasiside, setTagasiside] = useState([
		'Oli hea',
		'Huvitav',
		'Teistsugune',
		'Põnev',
	]);
	const addRef = useRef();
	const deleteX = (e) => {
		tagasiside.splice(e, 1);
		setTagasiside(tagasiside.slice());
	};

	const add = () => {
		tagasiside.push(addRef.current.value);
		setTagasiside(tagasiside.slice());
		addRef.current.value = '';
	};

	return (
		<div>
			Tagasisided:
			{tagasiside.map((info, e) => (
				<div key={e}>
					{info}

					<button onClick={() => deleteX(e)}>x</button>
				</div>
			))}
			<label>Lisa uus tagasiside:</label>
			<input type='text' ref={addRef} />
			<button onClick={add}>Sisesta</button>
		</div>
	);
}

export default Tagasiside;
