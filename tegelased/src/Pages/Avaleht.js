import tegelasedJSON from '../data/tegelased.json';
import Routing from './Routing';
function Avaleht() {
	const tegelane = tegelasedJSON;

	const valiTegelane = (tegelased) => {
		const tegelane = JSON.parse(localStorage.getItem('tegelased')) || [];
		tegelane.push(tegelased);
		localStorage.setItem('tegelased', JSON.stringify(tegelane));
	};

	return (
		<div>
			<Routing />
			<br />
			{tegelane.map((tegelased) => (
				<div>
					<div>
						{tegelased.eesnimi}
						{tegelased.perenimi}
						{tegelased.elukoht}
						{tegelased.vanus}
					</div>
					<button onClick={() => valiTegelane(tegelased)}>Vali</button>
				</div>
			))}
		</div>
	);
}

export default Avaleht;
