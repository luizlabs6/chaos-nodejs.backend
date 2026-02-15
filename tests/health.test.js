import { assert } from 'poku';
import app from '../src/index.js';

const server = app.listen(0, async () => {
  const { port } = server.address();

  const response = await fetch(`http://localhost:${port}/v1/health`);
  const body = await response.json();

  assert.strictEqual(response.status, 200, 'should return status 200');
  assert.deepStrictEqual(body, { status: 'Ok' }, 'should return { status: "Ok" }');

  server.close();
});
