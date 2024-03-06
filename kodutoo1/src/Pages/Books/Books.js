import { useState } from 'react';
import './books.css';

function Books() {
	const [book, setBook] = useState(['The Great Gatsby', 'War and Peace', 'Hamlet', 'Moby Dick', 'Gone with the Wind', 'To Kill a Mockingbird']);

	const sortFirstLetter = () => {
		book.sort((a, b) => a.localeCompare(b));
		setBook(book.slice());
	};

	const sortLastLetter = () => {
		book.sort((a, b) => b.localeCompare(a));
		setBook(book.slice());
	};

	const sortWordLength = () => {
		book.sort((a, b) => a.length - b.length);
		setBook(book.slice());
	};

	const sortSecondLetter = () => {
		book.sort((a, b) => a[1].localeCompare(b[1]));
		setBook(book.slice());
	};

	const sortWordCount = () => {
		book.sort();
		setBook(book.slice());
	};

	const lastBeforeLetter = () => {
		book.sort((a, b) => a.charCodeAt(a.length - 2) - b.charCodeAt(b.length - 2));
		setBook(book.slice());
	};

	const filterOnlyThe = () => {
		const result = book.filter((books) => books.startsWith('The'));
		setBook(result);
	};

	const filterMiddleAnd = () => {
		const result = book.filter((books) => books.includes('and'));
		setBook(result);
	};

	const filterMoreThan10 = () => {
		const result = book.filter((books) => books.length > 10);
		setBook(result);
	};

	const filterLessThan7 = () => {
		const result = book.filter((books) => books.length < 7);
		setBook(result);
	};

	const filterMoreThan3 = () => {
		const result = book.filter((books) => books.length >= 3);
		setBook(result);
	};

	const reset = () => {
		setBook(['The Great Gatsby', 'War and Peace', 'Hamlet', 'Moby Dick', 'Gone with the Wind', 'To Kill a Mockingbird']);
	};

	return (
		<div className='books'>
			{book.map((books) => (
				<div>{books}</div>
			))}
			<button onClick={reset}>Originaali</button>
			<button onClick={sortFirstLetter}>Esimese tähe järgi</button>
			<button onClick={sortLastLetter}>Viimase tähe järgi</button>
			<button onClick={sortWordLength}>Sõna pikkuse järgi</button>
			<button onClick={sortSecondLetter}>Sõna teise tähe järgi</button>
			<button onClick={sortWordCount}>Sõna arvu järgi</button>
			<button onClick={lastBeforeLetter}>Sõna eelviimase tähe järgi </button>
			<br />
			<button onClick={filterOnlyThe}>The'ga algavad sõnad</button>
			<button onClick={filterMiddleAnd}>Keskel on 'and'</button>
			<button onClick={filterMoreThan10}>Jäta alles rohkem kui 10 tähte </button>
			<button onClick={filterLessThan7}>Jäta alles vähem kui 7 tähte </button>
			<button onClick={filterMoreThan3}>Jäta alles rohkem kui 3 sõnalised </button>
		</div>
	);
}

export default Books;
