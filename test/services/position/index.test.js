'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('position service', function() {
  it('registered the positions service', () => {
    assert.ok(app.service('positions'));
  });
});
