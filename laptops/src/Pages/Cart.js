import React, { useState } from 'react';

function Cart() {
	const [cart, setCart] =
		useState(JSON.parse(localStorage.getItem('cartLaptop'))) || [];

	const deleteCart = (e) => {
		cart.splice(e, 1);
		setCart(cart.slice());
		localStorage.setItem('cartLaptop', JSON.stringify(cart));
	};

	return (
		<div>
			{cart.map((laptop, e) => (
				<div key={e}>
					{e}.{laptop.mark} <br />
					{laptop.mudel} <br />
					{laptop.hind} <br />
					<button onClick={() => deleteCart(e)}>x</button>
				</div>
			))}
		</div>
	);
}

export default Cart;
