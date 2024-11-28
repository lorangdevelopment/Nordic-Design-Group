export function match(param) {
	console.log({ lang: { param } });
	console.log(param === 'en-us');
	return param === 'en-us';
}
