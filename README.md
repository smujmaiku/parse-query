# Parse Query

[![build status][travis-image]][travis-url]
[![coverage status][codecov-image]][codecov-url]

A simple query parser

## Installation

`npm i smujmaiku/parse-query`

## Methods

```js
const parseQuery = require('parse-query');

parseQuery('?a=1&b');
// { a: '1', b: true }
```

## License

Copyright (c) 2018-2019, Michael Szmadzinski. (MIT License)

[travis-image]: https://travis-ci.org/smujmaiku/parse-query.svg?branch=master
[travis-url]: https://travis-ci.org/smujmaiku/parse-query
[codecov-image]: https://coveralls.io/repos/github/smujmaiku/parse-query/badge.svg
[codecov-url]: https://coveralls.io/github/smujmaiku/parse-query

