import { expect } from 'chai';
import sum from '../components/sum';

describe('Test with Jest', () => {
	it('should be a function - sum()', () => {
		expect(sum).to.be.a('function');
    });
    
    it('should return 3 - sum(1,2)', () => {
        expect(sum(1,2)).to.be.equal(3);
    })

    it('should return 7 - sum(2,5)', () => {
        expect(sum(2,5)).to.be.equal(7)
    })
});
