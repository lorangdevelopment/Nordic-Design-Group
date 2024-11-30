import * as CookieConsent from 'vanilla-cookieconsent';

const config: CookieConsent.CookieConsentConfig = {
	categories: {
		necessary: {
			enabled: true,
			readOnly: true
		},
		analytics: {
			autoClear: {
				cookies: [
					{ name: /^_ga/ }, // Match all cookies starting with '_ga'
					{ name: '_gid' },
					{ name: '_gat' },
				]
			},

			services: {
				googleAnalytics: {
					label: 'Google Analytics',
					onAccept: () => {}
					//No need for a onReject function since we autoClear the cookies in the start
				}
			}
		}
	},

	guiOptions: {
		consentModal: {
			layout: 'box inline',
			position: 'bottom right',
			equalWeightButtons: false,
			flipButtons: false
		},
		preferencesModal: {
			layout: 'box',
			position: 'right',
			equalWeightButtons: false,
			flipButtons: false
		}
	},

	language: {
		autoDetect: 'document',
		default: 'da',
		translations: {
			da: {
				consentModal: {
					title: 'Vi bruger cookies!',
					description:
						'Hej, dette websted bruger cookies for at sikre, at det fungerer korrekt, og sporingscookies for at forstå, hvordan du interagerer med det. Sidstnævnte vil kun blive sat efter samtykke. {{revisionMessage}} <button class="cc__link" data-cc="show-preferencesModal">Lad mig vælge</button>',
					revisionMessage:
						'<br><br>Vores <a href="/privatlivspolitik?hide-cookie-consent" target="_self" rel="">privatlivspolitik</a> har ændret sig siden dit sidste besøg.',
					footer:
						'<a href="/privatlivspolitik?hide-cookie-consent" target="_self" rel="">Privatlivspolitik</a>',

					acceptAllBtn: 'Accepter alle',
					acceptNecessaryBtn: 'Accepter nødvendige'
				},
				preferencesModal: {
					title: 'Cookie indstillinger',
					acceptAllBtn: 'Accepter alle',
					acceptNecessaryBtn: 'Accepter nødvendige',
					savePreferencesBtn: 'Gem indstillinger',
					closeIconLabel: 'Accepter nødvendige',
					sections: [
						{
							description:
								'Vi bruger cookies til at personliggøre indhold og forbedre din digitale oplevelse. Nogle cookies er afgørende for, at hjemmesiden kan fungere korrekt, og af sikkerhedsmæssige årsager. Disse vigtige cookies kan ikke deaktiveres.<br><br>Du kan til enhver tid aktivere eller deaktivere din tilladelse til, at cookies indsamler dine browserdata. Hvis du deaktiverer visse cookies, kan din browseroplevelse blive påvirket.<br><br>Du kan læse mere i vores <a href="/privatlivspolitik?hide-cookie-consent" target="_self" rel="">privatlivspolitik</a>.'
						},
						{
							title: 
                            'Strengt nødvendige cookies<span class="pm__badge">Nødvendige</span>',
							description:
								'Disse cookies indstilles for at sikre, at vores hjemmeside fungerer korrekt. De kan ikke deaktiveres.',
							linkedCategory: 'necessary',
							cookieTable: {
								headers: {
									name: 'Navn',
									service: 'Service',
									duration: 'Varighed',
									purpose: 'Formål'
								},
								/**/
								body: [
									{
										name: '',
										service: '',
										duration: '',
										purpose: ''
									}
								]
							}
						},
						{
							title: 'Analytiske cookies',
							description:
								'Disse cookies hjælper os med at forstå, hvordan brugerne interagerer med vores hjemmeside. Dataene indsamles anonymt og hjælper os med at forbedre vores tjenester.',
							linkedCategory: 'analytics',
							cookieTable: {
								headers: {
									name: 'Navn',
									service: 'Service',
									duration: 'Varighed',
									purpose: 'Formål'
								},
								body: [
									{
										name: '_ga',
										service: 'Google Analytics',
										duration: '2 år',
										purpose: 'Bruges til at skelne mellem unikke brugere og tælle sidevisninger.'
									},
									{
										name: '_gat',
										service: 'Google Analytics',
										duration: '1 minut',
										purpose: 'Bruges til at begrænse hyppigheden af dataindsamling.'
									},
									{
										name: '_gid',
										service: 'Google Analytics',
										duration: '1 dag',
										purpose: 'Bruges til at skelne mellem unikke brugere og tælle sidevisninger.'
									}
								]
							}
						}
					]
				}
			},

            en: {
				consentModal: {
					title: 'We use cookies!',
					description:
						'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. {{revisionMessage}} <button class="cc__link" data-cc="show-preferencesModal">Let me choose</button>',

					revisionMessage:
						'<br><br>Our <a href="/en-us/privacy-policy?hide-cookie-consent" target="_self" rel="">privacy policy</a> has changed since your last visit.',
					footer:
						'<a href="/en-us/privacy-policy?hide-cookie-consent" target="_self" rel="">Privacy policy</a>',

					acceptAllBtn: 'Accept All',
					acceptNecessaryBtn: 'Accept Necessary'
				},
				preferencesModal: {
					title: 'Cookie preferences',
					acceptAllBtn: 'Accept All',
					acceptNecessaryBtn: 'Accept Necessary',
					savePreferencesBtn: 'Save Preferences',
					closeIconLabel: 'Accept Necessary',
					sections: [
						{
							description:
								'We use cookies to personalize content and improve your digital experience. Some cookies are essential in order for the website to function correctly and for security purposes. These essential cookies cannot be deactivated.<br><br>You can activate or deactivate your permission for cookies to collect your browsing data at any time. If you deactivate certain cookies, your browsing experience may be affected.<br><br>You can find out more in our <a href="/en-us/privacy-policy?hide-cookie-consent" target="_self" rel="">privacy policy</a>.'
						},
						{
							title: 
                            'Strictly necessary cookies<span class="pm__badge">Required</span>',
							description:
								'These cookies are set to ensure that our website works correctly. They cannot be disabled.',
							linkedCategory: 'necessary',
							cookieTable: {
								headers: {
									name: 'Name',
									service: 'Service',
									duration: 'Duration',
									purpose: 'Purpose'
								},
								body: [
									{
										name: '',
										service: '',
										duration: '',
										purpose: ''
									}
								]
							}
						},
						{
							title: 'Analytics Cookies',
							description:
								'These cookies help us understand how users interact with our website. ' +
								'The data is collected anonymously and helps us improve our services.',
							linkedCategory: 'analytics',
							cookieTable: {
								headers: {
									name: 'Name',
									service: 'Service',
									duration: 'Duration',
									purpose: 'Purpose'
								},
								body: [
									{
										name: '_ga',
										service: 'Google Analytics',
										duration: '2 years',
										purpose: 'Used to distinguish unique users and count page views.'
									},
									{
										name: '_gat',
										service: 'Google Analytics',
										duration: '1 minute',
										purpose: 'Used to limit the frequency of data collection.'
									},
									{
										name: '_gid',
										service: 'Google Analytics',
										duration: '1 day',
										purpose: 'Used to distinguish unique users and count page views.'
									}
								]
							}
						}
					]
				}
			}
		}
	},

	revision: 1
};

export default config;
