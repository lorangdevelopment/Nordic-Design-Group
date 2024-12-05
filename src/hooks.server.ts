export function handle({ event, resolve }) {
	const locale = event.params.lang || 'da-dk';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', locale)
	});
}
