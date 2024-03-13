import './jook.css';
import { useParams } from 'react-router-dom';
import joogidJSON from '../HaldaJooke/joogid.json';
function Jook() {
	const { index } = useParams();

	const leitud = joogidJSON[index];
	return (
		<div>
			{leitud}

			{leitud === undefined && <div>Jooki ei leitud</div>}
		</div>
	);
}

export default Jook;
