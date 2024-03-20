import React, { useEffect, useState } from 'react';

function Tooted() {
	const [postitus, setPostitus] = useState([]);

	useEffect(() => {
		fetch('https://dummyjson.com/products')
			.then((res) => res.json())
			.then((json) => setPostitus(json.products));
	}, []);
	return (
		<div>
			{postitus.map((post) => (
				<div key={post.id}>
					{post.title}
					{post.price}
					<img src={post.thumbnail} alt='' />
				</div>
			))}
		</div>
	);
}

export default Tooted;
