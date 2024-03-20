import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Menuu() {
	const { t, i18n } = useTranslation();

	const changeLang = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<div>
			<div>
				<img
					onClick={() => changeLang('ee')}
					className='lang'
					style={{ width: '50px' }}
					src='./assets/images/estonia.png'
					alt=''
				/>
				<img
					onClick={() => changeLang('en')}
					className='lang'
					style={{ width: '50px' }}
					src='./assets/images/united-kingdom.png'
					alt=''
				/>
			</div>
			<Link to='/'>
				<img
					className='turtle'
					src='https://www.fisheries.noaa.gov/s3/styles/full_width/s3/dam-migration/hawksbill_sea_turtle.jpg?itok=ESbU98wo'
					alt='turtle'
				/>
			</Link>
			<Link to='/esindused'>
				<button className='btn'>{t('Esindused')}</button>
			</Link>
			<Link to='/arikliendile'>
				<button className='btn'>{t('Äriklient')}</button>
			</Link>
			<Link to='/osta-kinkekaart'>
				<button className='btn'>{t('Kinkekaart')}</button>
			</Link>
			<Link to='/ostukorv'>
				<button className='btn'>{t('Ostukorv')}</button>
			</Link>
			<Link to='/seaded'>
				<button className='btn'>{t('Seaded')}</button>
			</Link>
			<Link to='/hinnad'>
				<button className='btn'>{'Hinnad'}</button>
			</Link>
			<Link to='/tootajad'>
				<button className='btn'>{t('Töötajad')}</button>
			</Link>
			<Link to='/tooted'>
				<button className='btn'>{t('Tooted')}</button>
			</Link>
			<br /> <br />
			<Link to='/lisa-toode'>
				<button className='btn'>{t('Lisa toode')}</button>
			</Link>
			<Link to='/halda-tooted'>
				<button className='btn'>{t('Halda tooteid')}</button>
			</Link>
			<Link to='/halda-esindused'>
				<button className='btn'>{t('Halda esindusi')}</button>
			</Link>
			<Link to='/halda-hinnad'>
				<button className='btn'>{t('Halda hindu')}</button>
			</Link>
			<Link to='/halda-tootajad'>
				<button className='btn'>{t('Halda töötajaid')}</button>
			</Link>
			<Link to='/lisa-hind'>
				<button className='btn'>{t('Lisa hind')}</button>
			</Link>
			<Link to='/lisa-esindus'>
				<button className='btn'>{t('Lisa esindus')}</button>
			</Link>
			<Link to='/lisa-tootaja'>
				<button className='btn'>{t('Lisa töötaja')}</button>
			</Link>
		</div>
	);
}

export default Menuu;
