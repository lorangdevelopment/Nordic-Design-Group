const SELECTOR = '[data-page-preloader]';

export class Preloader {
	private _resolve: (() => void) | null;
	private el: HTMLElement | null;
	constructor() {
		this.el = document.querySelector(SELECTOR);

		this._resolve = null; //Use the resolve outside of the scope
		this._onReadyCompleted = this._onReadyCompleted.bind(this);
	}

	ready(): Promise<void> {
		return new Promise((resolve) => {
			this._resolve = resolve;

			if (this.el) {
				this.el.addEventListener('transitionend', this._onReadyCompleted);
				this.el.classList.add('--preloader-transitioning');
			}
		});
	}

	_onReadyCompleted() {
		if (this.el) {
			this.el.removeEventListener('transitionend', this._onReadyCompleted);
			//this.el.remove();
		}

		document.documentElement.classList.add('--preloader-loaded');

		if (this._resolve) {
			this._resolve();
			this._resolve = null;
		}
	}
}
