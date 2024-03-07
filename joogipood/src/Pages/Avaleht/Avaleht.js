import './avaleht.css';
import joogidJSON from '../HaldaJooke/joogid.json';
import { useState } from 'react';
function Avaleht() {
	const [joogid, setJoogid] = useState(joogidJSON);

	return (
		<div>
			{joogid.map((jook) => (
				<div>{jook}</div>
			))}
		</div>
	);
}

export default Avaleht;
