const myfilter = (arr, callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};

const recursiveFilter = (arr, callback) => {
	return (function recurive(arrInt, counter) {
		const [ head, ...tail ] = arrInt;
		return arrInt.length === 0
			? []
			: (callback(head, counter, arr) ? [ head ] : []).concat(recurive(tail, counter + 1));
	})(arr, 0);
};

export default recursiveFilter;
