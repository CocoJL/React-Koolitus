import { useParams } from 'react-router-dom';
import './ykstagasisideandja.css';

import nimedJSON from '../TagasisideAndjad/nimed.json';
function YksTagasisideAndja() {
	const { index } = useParams();
	const nimi = nimedJSON[index];
	return (
		<div>
			Inimese nimi: {nimi} <br />
			Inimese number: {index}
		</div>
	);
}

export default YksTagasisideAndja;
