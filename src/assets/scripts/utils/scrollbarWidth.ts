export const scrollbarWidth = () => {
	const documentStyles = document.documentElement.style;

	if (document.body) {
		const fixed = document.createElement('div');
		fixed.style.width = '100px';
		fixed.style.height = '100px';
		fixed.style.overflow = 'scroll';
		fixed.style.position = 'absolute';
		fixed.style.top = '-9999px';
		fixed.style.visibility = 'hidden';

		document.body.appendChild(fixed);

		const scrollbarWidth = fixed.offsetWidth - fixed.clientWidth;
		fixed.remove();

		documentStyles.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
	}
};
