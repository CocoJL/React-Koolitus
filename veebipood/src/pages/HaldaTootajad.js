import React, { useState } from 'react';
import haldaJSON from '../data/tootaja.json';

function HaldaTootajad() {
	const [tootaja, setTootaja] = useState(haldaJSON);

	const kustutaTootaja = (e) => {
		tootaja.splice(e, 1);
		setTootaja(haldaJSON.slice());
	};
	return (
		<div>
			<div>
				<table>
					<th>Tootaja nimi</th>
					<tr>
						<td></td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default HaldaTootajad;
