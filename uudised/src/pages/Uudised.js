import React from 'react';
import { Link } from 'react-router-dom';

function Uudised() {
	return (
		<div>
			<div>See on uudiste leht, nähtav localhost:3000/uudised aadressil</div>
			<span>Uudised saabuvad juba varsti, stay tuned!</span>
			<br />
			<Link to='/'>
				<button>Tagasi</button>
			</Link>
		</div>
	);
}

export default Uudised;
