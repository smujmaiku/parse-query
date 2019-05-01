var parseQuery = require('.');

describe('parseQuery', () => {
	it('should return an Object', () => {
		expect(parseQuery()).toEqual(expect.any(Object));
		expect(parseQuery('a')).toEqual(expect.any(Object));
		expect(parseQuery('a=1')).toEqual(expect.any(Object));
	});

	it('should decode a query', () => {
		expect(parseQuery('a=1')).toEqual({ a: '1' });
		expect(parseQuery('b=%27%20%22')).toEqual({ b: '\' "' });
	});

	it('should be true for empty keys', () => {
		expect(parseQuery('a&b=2')).toEqual({ a: true, b: '2' });
	});

	it('should not require ? as preface', () => {
		expect(parseQuery('a&b=2')).toEqual(parseQuery('?a&b=2'));
	});
});
