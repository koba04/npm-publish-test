import assert from 'assert';
import { equal } from './';

describe('equal', () => {
  it('should pass', () => {
    assert.equal(equal('foo', 'foo'), true);
  });
});
