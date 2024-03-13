import './avaleht.css';
import joogidJSON from '../HaldaJooke/joogid.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Avaleht() {
	const [joogid, setJoogid] = useState(joogidJSON);

	return (
		<div>
			{joogid.map((element, index) => (
				<div key={index}>
					<Link to={'/jook/' + index}>
						{' '}
						<span>{element}</span>{' '}
					</Link>
				</div>
			))}
		</div>
	);
}

export default Avaleht;
