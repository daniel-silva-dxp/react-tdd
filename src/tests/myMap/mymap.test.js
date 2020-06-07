import { expect } from 'chai';
import recusionMap from '../../components/myMap/mymap';

describe('My Map Method', () => {
	test('should be a function - recusionMap()', () => {
		expect(recusionMap).to.be.a('function');
	});

	test('should return `[1,2]` when receive is [1,2] param', () => {
		expect(recusionMap([ 1, 2 ], (item) => item)).to.be.deep.equal([ 1, 2 ]);
	});

	test('should return `[3,4]` when receive is [3,4] param', () => {
		expect(recusionMap([ 3, 4 ], (item) => item)).to.be.deep.equal([ 3, 4 ]);
	});

	test('should return `[2,3]` when it is `recusionMap([1,2], (item) => item + 1)`', () => {
		expect(recusionMap([ 1, 2 ], (item) => item + 1)).to.be.deep.equal([ 2, 3 ]);
	});

	test('should return `[5,6]` when it is `recusionMap([4,5], (item) => item + 1)`', () => {
		expect(recusionMap([ 4, 5 ], (item) => item + 1)).to.be.deep.equal([ 5, 6 ]);
	});

	test('should return `[0,1,2]` when it is `recusionMap([1,2,3], (item, index) => index)`', () => {
		expect(recusionMap([ 1, 2, 3 ], (item, index) => index)).to.be.deep.equal([ 0, 1, 2 ]);
	});

	test('should return `[[1,1], [1,1]]` when it is `recusionMap([1,1], (item, index, arr) => arr)`', () => {
		expect(recusionMap([ 1, 1 ], (item, index, arr) => arr)).to.be.deep.equal([ [ 1, 1 ], [ 1, 1 ] ]);
	});
});
