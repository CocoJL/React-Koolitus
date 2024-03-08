import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
						<th>Toote pilt</th>
						<th>Toote nimi</th>
						<th>Toote hind</th>
						<th>Muuda</th>
						<th>Kustuta</th>
					</tr>
				</thead>
				<tbody>
					{tooted.map((toode, e) => (
						<tr key={e}>
							<td>
								<img className='pilt' src={toode.pilt} alt='' />
							</td>
							<td>{toode.nimi}</td>
							<td>{toode.hind} €</td>
							<td>
								<Link to={'/muuda-toode/' + e}>
									<button>Muuda</button>
								</Link>
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
