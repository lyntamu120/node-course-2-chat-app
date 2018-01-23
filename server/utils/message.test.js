var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');


describe('generateMessage', () => {
    it('should generate correct message', () => {
        var res = generateMessage('lyn', 'Hey');
        expect(res.from).toBe('lyn');
        expect(res.text).toBe('Hey');
        expect(res.createAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it ('should generate correct location object', () => {
        var from = 'lyn';
        var latitude = 23;
        var longitude = -67;
        var url = 'https://www.google.com/maps?q=23,-67';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});
