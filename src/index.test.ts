import assert from 'assert';
import { equal, ok } from './';

describe('equal', () => {
  it('should pass', () => {
    assert.equal(equal('foo', 'foo'), true);
  });
});

describe('ok', () => {
    it('should pass', () => {
      assert.equal(ok(true), true);
      assert.equal(ok(false), false);
    });
  });
