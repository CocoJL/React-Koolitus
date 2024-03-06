import React, { useState } from 'react';
import haldaJSON from '../data/tootaja.json';

function HaldaTootajad() {
	const [tootaja, setTootaja] = useState(haldaJSON);

	const kustutaTootaja = (e) => {
		haldaJSON.splice(e, 1);
		setTootaja(haldaJSON.slice());
	};
	return (
		<div>
			<div>
				<table>
					<th>Tootaja nimi</th>
					<tr>
						<td>
							{tootaja.map((tooline, e) => (
								<div key={tooline}>
									{tooline}

									<button onClick={() => kustutaTootaja(e)}>x</button>
								</div>
							))}
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default HaldaTootajad;
