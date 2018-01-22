var expect = require('expect');
var { generateMessage } = require('./message');


describe('generateMessage', () => {
    it('should generate correct message', () => {
        var res = generateMessage('lyn', 'Hey');
        expect(res.from).toBe('lyn');
        expect(res.text).toBe('Hey');
        expect(res.createAt).toBeA('number');
    });
});
