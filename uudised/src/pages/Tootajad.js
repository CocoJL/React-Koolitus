import React from 'react';
import tootajadJSON from '../data/tootajad.json';
function Tootajad() {
	const tootajad = tootajadJSON;
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Nimi</th>
						<th>Ala</th>
						<th>Telefon</th>
					</tr>
				</thead>
				<tbody>
					{tootajad.map((tootaja, index) => (
						<tr key={tootaja}>
							<td>{tootaja.nimi}</td>
							<td>{tootaja.ala}</td>
							<td>
								<button>{tootaja.telefon}</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Tootajad;
