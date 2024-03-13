import React from 'react';
import { Link } from 'react-router-dom';
function Menuu() {
	return (
		<div>
			<Link to='/'>
				<img
					className='turtle'
					src='https://www.fisheries.noaa.gov/s3/styles/full_width/s3/dam-migration/hawksbill_sea_turtle.jpg?itok=ESbU98wo'
					alt='turtle'
				/>
			</Link>
			<Link to='/esindused'>
				<button className='btn'>Esindused</button>
			</Link>
			<Link to='/arikliendile'>
				<button className='btn'>Äriklient</button>
			</Link>
			<Link to='/osta-kinkekaart'>
				<button className='btn'>Kinkekaart</button>
			</Link>
			<Link to='/ostukorv'>
				<button className='btn'>Ostukorv</button>
			</Link>
			<Link to='/seaded'>
				<button className='btn'>Seaded</button>
			</Link>
			<Link to='/hinnad'>
				<button className='btn'>Hinnad</button>
			</Link>
			<Link to='/tootajad'>
				<button className='btn'>Töötajad</button>
			</Link>
			<Link to='/tooted'>
				<button className='btn'>Tooted</button>
			</Link>
			<br /> <br />
			<Link to='/lisa-toode'>
				<button className='btn'>Lisa toode</button>
			</Link>
			<Link to='/halda-tooted'>
				<button className='btn'>Halda tooteid</button>
			</Link>
			<Link to='/halda-esindused'>
				<button className='btn'>Halda esindusi</button>
			</Link>
			<Link to='/halda-hinnad'>
				<button className='btn'>Halda hindu</button>
			</Link>
			<Link to='/halda-tootajad'>
				<button className='btn'>Halda töötajaid</button>
			</Link>
			<Link to='/lisa-hind'>
				<button className='btn'>Lisa hind</button>
			</Link>
			<Link to='/lisa-esindus'>
				<button className='btn'>Lisa esindus</button>
			</Link>
			<Link to='/lisa-tootaja'>
				<button className='btn'>Lisa töötaja</button>
			</Link>
		</div>
	);
}

export default Menuu;
