import React, { useRef } from 'react';
import hindJSON from '../data/hinnad.json';
import { useParams } from 'react-router-dom';
function MuudaHind() {
	const { indeks } = useParams();
	const hinnad = hindJSON[indeks];
	const hindRef = useRef();
	const muudaHind = () => {
		hindJSON[indeks] = { ...hinnad, number: Number(hindRef.current.value) };
		hindRef.current.value = '';
	};

	if (hinnad === undefined) {
		return <div>Hinda ei leitud</div>;
	}
	return (
		<div>
			<div>
				<br />
				<label>Nimi</label> <br />
				<input defaultValue={hinnad.number} type='number' ref={hindRef} />{' '}
				<br />
				<button onClick={muudaHind}>Muuda</button> <br />
			</div>
		</div>
	);
}

export default MuudaHind;
