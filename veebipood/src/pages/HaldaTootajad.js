import React, { useState } from 'react';
import haldaJSON from '../data/tootaja.json';
import { Link } from 'react-router-dom';
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
					<thead>
						<tr>
							<th>Nimi</th>
							<th>Number</th>
							<th>Elukoht</th>
							<th>Vanus</th>
							<th>Kustuta</th>
							<th>Muuda</th>
						</tr>
					</thead>
					<tbody>
						{tootaja.map((tooline, e) => (
							<tr key={tooline}>
								<td>{tooline.nimi}</td>
								<td>{tooline.number}</td>
								<td>{tooline.elukoht}</td>
								<td>{tooline.vanus}</td>
								<td>
									<button onClick={() => kustutaTootaja(e)}>x</button>
								</td>
								<td>
									<Link to={'/muuda-tootaja/' + e}>
										<button>Muuda</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default HaldaTootajad;
