import { expect } from 'chai';
import sum from '../components/sum';

describe('Test with Jest', () => {
	it('Should sum be a function', () => {
		expect(sum).to.be.a('function');
	});
});
