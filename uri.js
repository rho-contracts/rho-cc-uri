var c = require('rho-contracts-fork'),
    _ = require('underscore');

var isUri = require('valid-url').isUri;

module.exports = c.pred(function (item) {
    return _(item).isString() && isUri(item);
}).rename('uri');
