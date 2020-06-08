const myevery = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (!callback(arr[i], i, arr)) {
			return false;
		}
	}
	return true;
};

const recursiveEvery = (arr, callback) => {
	return (function recursive(arrInt, counter) {
		const [ head, ...tail ] = arrInt;
		return arrInt.length === 0 ? true : !callback(head, counter, arr) ? false : recursive(tail, counter + 1);
	})(arr, 0);
};

export default recursiveEvery;
