import { hello } from './';

test('it should do a basic test', async () => {
  expect(1 + 1).toBe(2);
  const res = await hello('world');
  expect(res).toEqual('Hello world!');
});
