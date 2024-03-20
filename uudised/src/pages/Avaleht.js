import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Avaleht() {
	const { t, i18n } = useTranslation();

	const changeLang = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem('language', lang);
	};

	const [post, setPost] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, []);
	return (
		<div>
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
						<Link to={'/kasutaja-postitus/' + index}>
							<button>Kasutaja postitus</button>
						</Link>
						<Link to={'/yks-postitus/' + index}>
							<button>Vt postitus</button>
						</Link>
					</div>
				))}
			</div>
			<div>
				<img
					src='https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg'
					alt='bg'
				/>
			</div>

			<div>
				<img
					onClick={() => changeLang('ee')}
					className='flag'
					src='./estonia.png'
					alt=''
				/>
				<img
					onClick={() => changeLang('en')}
					className='flag'
					src='./united-kingdom.png'
					alt=''
				/>
			</div>

			<div>
				<Link to='/'>
					<button>{t('Uudised-leht')}</button>
				</Link>
				<Link to='/kontakt'>
					<button>{t('Ühendust')}</button>
				</Link>
				<Link to='/meist'>
					<button>{t('Info')}</button>
				</Link>
				<Link to='/uudised'>
					<button>{t('Uudised')}</button>
				</Link>
				<Link to='/tootajad'>
					<button>{t('Tootajad')}</button>
				</Link>
				<Link to='/lisa-uudis'>
					<button>{t('Lisa-Uudis')}</button>
				</Link>
				<Link to='/halda-uudis'>
					<button>{t('Halda-Uudis')}</button>
				</Link>
			</div>
		</div>
	);
}

export default Avaleht;
