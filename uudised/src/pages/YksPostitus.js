import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function YksPostitus() {
	const [paring, setParing] = useState({});
	const { index } = useParams();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/' + index)
			.then((res) => res.json())
			.then((data) => setParing(data));
	}, [index]);
	return (
		<div>
			<div>{paring.userId}</div>
			<div>{paring.id}</div>
			<div>{paring.title}</div>
			<div>{paring.body}</div>
		</div>
	);
}

export default YksPostitus;
