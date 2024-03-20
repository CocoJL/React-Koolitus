import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	ee: {
		translation: {
			'Uudised-leht': 'Avaleht',
			Ühendust: 'Võta meiega ühendust',
			Info: 'Info',
			Uudised: 'Uudised',
			Tootajad: 'Töötajad',
			'Lisa-Uudis': 'Lisa uudised',
			'Halda-Uudis': 'Halda uudiseid',
		},
	},
	en: {
		translation: {
			'Uudised-leht': 'Home',
			Ühendust: 'Connect us',
			Info: 'About',
			Uudised: 'News',
			Tootajad: 'Workers',
			'Lisa-Uudis': 'Add news',
			'Halda-Uudis': 'Maintain news',
		},
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: localStorage.getItem('language') || 'ee',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
