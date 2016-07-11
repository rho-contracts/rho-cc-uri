rho-cc-uri
==========

Check URIs with [rho-contracts][].

[rho-contracts]: https://github.com/bodylabs/rho-contracts.js


Usage
-----

You must use the Body Labs package, `rho-contracts-fork`:
```js
  "dependencies": {
    "rho-contracts-fork": "^1.2.2"
  }
```

```js

var cc = {};

cc.uri = require('rho-cc-uri');

// Does not throw.
cc.uri.check('https://foo/bar');

// Throws.
cc.uri.check('nope');
```


Installation
------------

```sh
npm install rho-contracts-fork rho-cc-uri
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
