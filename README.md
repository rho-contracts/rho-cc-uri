rho-cc-uri
==========

Check URIs with [rho-contracts][].

[rho-contracts]: https://github.com/bodylabs/rho-contracts.js


Usage
-----

```js

var cc = {};

cc.uri = require('rho-cc-s3-uri');

// Does not throw.
cc.uri.check('https://foo/bar');

// Throws.
cc.uri.check('nope');
```


Installation
------------

```sh
npm install rho-contracts rho-cc-uri
```


Contribute
----------

- Issue Tracker: https://github.com/bodylabs/rho-cc-uri/issues
- Source Code: https://github.com/bodylabs/rho-cc-uri

Pull requests welcome!


Support
-------

If you are having issues, please let us know.


License
-------

The project is licensed under the Mozilla Public License Version 2.0.
