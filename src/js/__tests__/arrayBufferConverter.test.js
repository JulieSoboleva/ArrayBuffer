import ArrayBufferConverter from '../arrayBufferConverter';

test('creating object ArrayBufferConverter', () => {
    const converter = new ArrayBufferConverter();
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    converter.load(data);
    expect(converter.toString()).toBe(data);
});