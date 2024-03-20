import React from 'react';

function Avaleht() {
	const computers = JSON.parse(localStorage.getItem('laptops')) || [];

	const addCart = (selectedComputer) => {
		const cart = JSON.parse(localStorage.getItem('cartLaptop')) || [];
		cart.push(selectedComputer);
		localStorage.setItem('cartLaptop', JSON.stringify(cart));
	};
	return (
		<div className='avaleht-text'>
			<div>Tere</div>
			<div>Siin lehel saad sülearvuteid vaadata ja lisada</div>
			{computers.map((computer, index) => (
				<div key={index}>
					Mark: {computer.mark} <br />
					Mudel: {computer.mudel} <br />
					Hind: {computer.hind} <br />
					<button onClick={() => addCart(computer)}>Lisa ostukorvi</button>
				</div>
			))}
		</div>
	);
}

export default Avaleht;
