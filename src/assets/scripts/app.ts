import { Scroll } from './core/Scroll';
import { Preloader } from './core/Preloader';

import * as CookieConsent from 'vanilla-cookieconsent';
import config from '../cookieconsent/cookieconsent-config';
import { scrollbarWidth } from './utils/scrollbarWidth';
import { isTouchDevice } from './utils/isTouchDevice';

export default function () {
	Scroll.init();
	new Preloader().ready();

	CookieConsent.run(config);
	scrollbarWidth();
	document.documentElement.classList.toggle('is-touch-device', isTouchDevice());
}
