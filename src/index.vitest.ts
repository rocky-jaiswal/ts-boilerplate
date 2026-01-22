import { describe, it, expect } from 'vitest';
import { hello } from './';

describe('hello function', () => {
  it('should do a basic test', async () => {
    expect(1 + 1).toBe(2);
    const res = await hello('world');
    expect(res).toEqual('Hello world!');
  });
});
