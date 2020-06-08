import { expect } from 'chai';
import recursiveEvery from '../../components/recusion/myevery';

describe('My Every test', () => {
	test('should be a function', () => {
		expect(recursiveEvery).to.be.a('function');
	});

	test('should return `true` when receiving `([], (item) => item)`', () => {
		expect(recursiveEvery([], (item) => item)).to.be.equal(true);
	});

	test('should return `false` when receiving `([0,2,3], (item) => item)`', () => {
		expect(recursiveEvery([ 0, 2, 3 ], (item) => item)).to.be.equal(false);
	});

	test('should return `true` when receiving `([1,2,3], (item) => item > 0)`', () => {
		expect(recursiveEvery([ 1, 2, 3 ], (item) => item > 0)).to.be.equal(true);
	});

	test('should return `true` when receiving `([1,2,3], (item, index) => index === item - 1)`', () => {
		expect(recursiveEvery([ 1, 2, 3 ], (item, index) => index === item - 1)).to.be.equal(true);
	});

	test('should return `true` when receiving `([1,2,3], (item, index, arr) => arr.length === 3)`', () => {
		expect(recursiveEvery([ 1, 2, 3 ], (item, index, arr) => arr.length === 3)).to.be.equal(true);
	});
});
