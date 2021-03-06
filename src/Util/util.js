/* eslint-disable no-prototype-builtins */
const serialize = obj => {
	const str = [];
	for (const p in obj) {
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
	}

	return str.join('&');
};

export {serialize};
