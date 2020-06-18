const mysome = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return true;
		}
	}
	return false;
};

const recursiveSome = (arr, callback) => {
	return (function recursive(arrInt, counter) {
		const [ head, ...tail ] = arrInt;
		return arrInt.length === 0 ? false : callback(head, counter, arr) ? true : recursive(tail, counter + 1);
	})(arr, 0);
};

export default recursiveSome;
