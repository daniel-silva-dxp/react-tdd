const mymap = (arr, callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i], i, arr));
	}
	return newArr;
};

export default mymap;
