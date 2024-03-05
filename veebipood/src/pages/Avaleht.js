import React, { useState } from 'react';

function Avaleht() {
	const [kogus, setKogus] = useState(0);
	const [message, setMessage] = useState('');
	const [like, setLike] = useState(false);

	function nulli() {
		setKogus(0);
		setMessage('Nullisid koguse!');
	}

	function vahenda() {
		setKogus(kogus - 1);
		setMessage('Vähendasid kogust!');
	}

	function suurenda() {
		setKogus(kogus + 1);
		setMessage('Suurendasid kogust!');
	}

	return (
		<div>
			{like === false && <img src='/assets/images/dislike.svg' alt='' />}
			{like === true && <img src='/assets/images/like.svg' alt='' />}

			<button onClick={() => setLike(!like)}>Muuda like</button>

			<br />
			<br />
			<div>{message}</div>

			{kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}

			<br />

			<button disabled={kogus === 0} onClick={vahenda}>
				-
			</button>

			<span className={kogus >= 10 ? 'kuldne' : undefined}>{kogus}</span>

			<button onClick={suurenda}>+</button>

			<br />
		</div>
	);
}

export default Avaleht;
