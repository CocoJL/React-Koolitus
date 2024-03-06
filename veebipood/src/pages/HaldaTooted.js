import React, { useState } from 'react';
import tootedFailist from '../data/tooted.json';

function HaldaTooted() {
	const [tooted, setTooted] = useState(tootedFailist);

	const kustutaToode = (e) => {
		tootedFailist.splice(e, 1);
		setTooted(tootedFailist.slice());
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Toote nimi</th>
						<th>Toote hind</th>
						<th>Muuda</th>
						<th>Kustuta</th>
					</tr>
				</thead>
				<tbody>
					{tooted.map((toode, e) => (
						<tr key={e}>
							<td>{toode}</td>
							<td>5€</td>
							<td>
								<button>Muuda</button>
							</td>
							<td>
								<button onClick={() => kustutaToode(e)}>x</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default HaldaTooted;
