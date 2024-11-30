/**
 * Determines if the device is a touch device.
 * @return {boolean}
 */

export const isTouchDevice = () => {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
