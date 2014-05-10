/**
 * slugify
 */

var expect = require('chai').expect;
var slugify = require('./slugify');

describe('slugify', function() {

  it('should do something awesome', function() {
    var actual = slugify('foo bar baz');
    var expected = 'foo-bar-baz';
    expect(actual).to.eql(expected);
  });


  it('should do something awesome', function() {
    var actual = slugify('-foo bar baz-');
    var expected = 'foo-bar-baz';
    expect(actual).to.eql(expected);
  });
});