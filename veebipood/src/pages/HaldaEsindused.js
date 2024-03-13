import React, { useState } from 'react';
import tallinnJSON from '../data/tallinn.json';
import { Link } from 'react-router-dom';
function HaldaEsindused() {
	const [keskus, setKeskus] = useState(tallinnJSON);
	const deleteKeskus = (e) => {
		tallinnJSON.splice(e, 1);
		setKeskus(tallinnJSON.slice());
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Esindus</th>
						<th>Muuda</th>
						<th>Kustuta</th>
					</tr>
				</thead>
				<tbody>
					{keskus.map((keskused, e) => (
						<tr key={e}>
							<td>{keskused.nimi}</td>
							<td>
								<Link to={'/muuda-esindus/' + e}>
									<button>Muuda</button>
								</Link>
							</td>
							<td>
								<button onClick={() => deleteKeskus(e)}>x</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default HaldaEsindused;
