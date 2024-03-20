import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function KasutajaPostitus() {
	const { index } = useParams();

	const [post, setPost] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => {
				const result = data.filter((e) => e.userId === Number(index));
				setPost(result);
			});
	});
	return (
		<div>
			{post.map((postitused, index) => (
				<div key={index}>
					<div>
						<i>{postitused.id}</i>
					</div>
					<div>
						<u>{postitused.userId}</u>
					</div>
					<div>
						<b>{postitused.title}</b>
					</div>
					<div>{postitused.body}</div>
				</div>
			))}
		</div>
	);
}

export default KasutajaPostitus;
