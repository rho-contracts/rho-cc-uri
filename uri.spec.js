var uri = require('./uri');

var c = require('rho-contracts-fork');

var should = require('should');

// For convenience and conciseness.
var good = should.doesNotThrow;
var bad = function (block) { should.throws(block, c.ContractError); };

describe('uri', function () {

    it('accepts what it should', function () {
        good(function () { uri.check('https://foo/bar'); });
        good(function () { uri.check('sample://foo'); });
        good(function () { uri.check('file:///home/pony'); });
    });

    it('rejects what it should', function () {
        bad(function () { uri.check(' '); });
        bad(function () { uri.check('foo-bar-baz'); });
        bad(function () { uri.check(3); });
        bad(function () { uri.check(null); });
        bad(function () { uri.check(undefined); });
    });

});
