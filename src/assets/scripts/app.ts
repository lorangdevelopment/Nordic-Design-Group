import { Scroll } from './core/Scroll';
import * as CookieConsent from 'vanilla-cookieconsent';
import config from '../cookieconsent/cookieconsent-config';

export default function () {
	Scroll.init();
	CookieConsent.run(config);
}
