'use strict';

const max = function (numbers) {
    const a = numbers[0]
    const b = numbers[1]
    const c = numbers[2]
	if (a > b) {
		if (a > c) {
			return a
		}
		return c
	}
	if (b > c) {
		return b
	}
	return c
};