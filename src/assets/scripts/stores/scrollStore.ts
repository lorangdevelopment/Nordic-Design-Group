//https://github.com/locomotivemtl/astro-boilerplate/blob/main/src/scripts/stores/scroll.ts
import { map } from 'nanostores';

export type ScrollValues = {
	scroll: number;
	limit: number;
	velocity: number;
	direction: number;
	progress: number;
};

export const $scroll = map<ScrollValues>({
	scroll: 0,
	limit: 0,
	velocity: 0,
	direction: 0,
	progress: 0
});
