import * as jsUtil from '../index';

describe('index', () => {
    test('exports all modules from src', () => {
        expect(jsUtil.constructor.name).toBe('Object');
        // @ts-ignore
        expect(jsUtil.peek([1, 2])).toBe(2);
    });
});