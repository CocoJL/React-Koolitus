import React, { useState } from 'react';

function HaldaUudiseid() {
	const [uudised, setUudised] = useState(
		JSON.parse(localStorage.getItem('uudised') || [])
	);

	const deleteUudis = (e) => {
		uudised.splice(e, 1);
		setUudised(uudised.slice());
		localStorage.setItem('uudised', JSON.stringify(uudised));
	};

	return (
		<div>
			{uudised.map((news, index) => (
				<div>
					<div>
						{news.uusUudis}
						<button onClick={() => deleteUudis(index)}>x</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default HaldaUudiseid;
