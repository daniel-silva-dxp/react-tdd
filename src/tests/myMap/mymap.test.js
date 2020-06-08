import { expect } from 'chai';
import recusionMap from '../../components/myMap/mymap';

describe('My Map Method', () => {
	test('should be a function - recusionMap()', () => {
		expect(recusionMap).to.be.a('function');
	});

	test('should return `[1,2]` when receiving `[1,2]` as param', () => {
		expect(recusionMap([ 1, 2 ], (item) => item)).to.be.deep.equal([ 1, 2 ]);
	});

	test('should return `[3,4]` when receive `[3,4]` as param', () => {
		expect(recusionMap([ 3, 4 ], (item) => item)).to.be.deep.equal([ 3, 4 ]);
	});

	test('should return `[2,3]` when receiving `([1,2], (item) => item + 1)` as param', () => {
		expect(recusionMap([ 1, 2 ], (item) => item + 1)).to.be.deep.equal([ 2, 3 ]);
	});

	test('should return `[5,6]` when receiving `([4,5], (item) => item + 1)` as param', () => {
		expect(recusionMap([ 4, 5 ], (item) => item + 1)).to.be.deep.equal([ 5, 6 ]);
	});

	test('should return `[0,1,2]` when receiving `([1,2,3], (item, index) => index)` as param', () => {
		expect(recusionMap([ 1, 2, 3 ], (item, index) => index)).to.be.deep.equal([ 0, 1, 2 ]);
	});

	test('should return `[[1,1], [1,1]]` when receiving `([1,1], (item, index, arr) => arr)` as param', () => {
		expect(recusionMap([ 1, 1 ], (item, index, arr) => arr)).to.be.deep.equal([ [ 1, 1 ], [ 1, 1 ] ]);
	});
});
