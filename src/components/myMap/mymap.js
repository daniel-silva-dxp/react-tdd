const mymap = (arr, callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i], i, arr));
	}
	return newArr;
};

// Map com recursão
const recusionMap = (arr = [], callback) => {
	return (function recusion(arrInt, counter) {
		const [ head, ...tail ] = arrInt;
		return arrInt.length === 0 ? [] : [ callback(head, counter, arr), ...recusion(tail, counter + 1) ];
	})(arr, 0);
};

export default recusionMap;
