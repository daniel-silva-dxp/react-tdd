import { expect } from 'chai';
import myreverse from '../../components/recusion/myreverse';

describe('My Reverse Test', () => {
	test('should be a function', () => {
		expect(myreverse).to.be.a('function');
	});

	test('should return `[ 1 ]` when receiving `[ 1 ]`', () => {
		expect(myreverse([ 1 ])).to.be.deep.equal([ 1 ]);
	});

	test('should return `[ 2 , 1 ]` when receiving `[ 1 , 2 ]`', () => {
		expect(myreverse([ 1, 2 ])).to.be.deep.equal([ 2, 1 ]);
	});
});
