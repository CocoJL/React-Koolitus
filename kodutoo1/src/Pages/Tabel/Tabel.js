import './tabel.css';

function Tabel() {
	return (
		<div className='Tabel'>
			<button className='btn'>Vajuta mind</button>
			<p className='blue-text'>Sinine tekst</p>
			<p className='green-text'>Roheline tekst</p>
			<img className='turtle-img' src='https://futureoftheocean.files.wordpress.com/2016/07/rw13-299_cropped.jpg' alt='' />
			<table>
				<tr>
					<th>Company</th>
					<th>Contact</th>
					<th>Country</th>
				</tr>
				<tr>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
				<tr>
					<td>Ernst Handel</td>
					<td>Roland Mendel</td>
					<td>Austria</td>
				</tr>
				<tr>
					<td>Island Trading</td>
					<td>Helen Bennett</td>
					<td>UK</td>
				</tr>
				<tr>
					<td>Laughing Bacchus Winecellars</td>
					<td>Yoshi Tannamuri</td>
					<td>Canada</td>
				</tr>
				<tr>
					<td>Magazzini Alimentari Riuniti</td>
					<td>Giovanni Rovelli</td>
					<td>Italy</td>
				</tr>
			</table>
		</div>
	);
}

export default Tabel;
