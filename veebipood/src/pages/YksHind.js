import React from 'react';
import { useParams } from 'react-router-dom';
import hindJSON from '../data/hinnad.json';
function YksHind() {
	const { index } = useParams();
	const number = hindJSON[index];

	if (number === undefined) {
		return <div>Seda hinda ei ole olemas</div>;
	}

	return <div>{number.number}</div>;
}

export default YksHind;
