var assert = require('assert');
var add   = require('../src/add.js');

describe('add()', function(){
  it('should return 2 when you pass it 1, 1', function(){
    assert.equal(add(1,1), 2);
  });
});
