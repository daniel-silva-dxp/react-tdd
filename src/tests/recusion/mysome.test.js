import { expect } from 'chai';
import mysome from '../../components/recusion/mysome';

describe('My Some test', () => {
	test('should be a function', () => {
		expect(mysome).to.be.a('function');
	});

	test('should return `false` when receiving `([], (item) => item)`', () => {
		expect(mysome([], (item) => item)).to.be.equal(false);
	});

	test('should return `true` when receiving `([0,2,3], (item) => item)`', () => {
		expect(mysome([ 0, 2, 3 ], (item) => item)).to.be.equal(true);
	});

	test('should return `true` when receiving `([ 1, 2, 3 ], (item, index) => index % 2 === 0))`', () => {
		expect(mysome([ 1, 2, 3 ], (item, index) => index % 2 === 0)).to.be.equal(true);
	});

	test('should return `false` when receiving `([ 1, 5, 3 ], (item) => item % 2 === 0))`', () => {
		expect(mysome([ 1, 5, 3 ], (item) => item % 2 === 0)).to.be.equal(false);
	});

	test('should return `true` when receiving `([1,2,3], (item, index, arr) => arr.length === 3)`', () => {
		expect(mysome([ 1, 2, 3 ], (item, index, arr) => arr.length === 3)).to.be.equal(true);
	});
});
