import { useRef, useState } from 'react';
import './haldajooke.css';
import joogidJSON from '../HaldaJooke/joogid.json';
function Haldajooke() {
	const [joogid, setJoogid] = useState(joogidJSON);
	const lisaJookRef = useRef();
	const deleteJook = (e) => {
		joogidJSON.splice(e, 1);
		setJoogid(joogidJSON.slice());
	};

	const lisaJook = () => {
		joogidJSON.push(lisaJookRef.current.value);
		setJoogid(joogidJSON.slice());
		lisaJookRef.current.value = '';
	};
	return (
		<div>
			{joogidJSON.map((jook, e) => (
				<div>
					{jook}
					<button onClick={() => deleteJook(e)}>x</button>
				</div>
			))}
			<label>Lisa uus jook</label>
			<input type='text' ref={lisaJookRef} />
			<button onClick={lisaJook}>Lisa</button>
		</div>
	);
}

export default Haldajooke;
