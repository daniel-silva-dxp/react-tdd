import { expect } from 'chai';
import recursiveFilter from '../../components/recusion/myfilter';

describe('My filter tests', () => {
	test('should be a function', () => {
		expect(recursiveFilter).to.be.a('function');
	});

	test('should return `[1,2]` when receiving `[1,2]` as param', () => {
		expect(recursiveFilter([ 1, 2 ], (item) => item)).to.be.deep.equal([ 1, 2 ]);
	});

	test('should return `[1,2]` when receiving `[0,1,2]` as param', () => {
		expect(recursiveFilter([ 0, 1, 2 ], (item) => item)).to.be.deep.equal([ 1, 2 ]);
	});

	test('should return `[2,4]` when receiving `([1,2,3,4], (item) => item % 2 === 0)`', () => {
		expect(recursiveFilter([ 1, 2, 3, 4 ], (item) => item % 2 === 0)).to.be.deep.equal([ 2, 4 ]);
	});

	test('should return `[1,2,3]` when receiving `([1,2,3,5], (item, index) => item === index + 1)`', () => {
		expect(recursiveFilter([ 1, 2, 3, 5 ], (item, index) => item === index + 1)).to.be.deep.equal([ 1, 2, 3 ]);
	});

	test('should return `[1,2,3,5]` when receiving `([1,2,3,2,1,5], (item, index, arr) => index === arr.indexOf(item))`', () => {
		expect(
			recursiveFilter([ 1, 2, 3, 2, 1, 5 ], (item, index, arr) => index === arr.indexOf(item))
		).to.be.deep.equal([ 1, 2, 3, 5 ]);
	});
});
