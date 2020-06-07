const sum = (arr) => {
	if (arr.length === 0) {
		return 0;
	}
	const [ head, ...taill ] = arr;
	return head + sum(taill);
};

console.log(sum([ 1, 2, 3, 4 ]));
