# Parse Query

[![build status][travis-image]][travis-url]
[![coverage status][codecov-image]][codecov-url]

A simple query parser

## Installation

`npm i smujmaiku/parse_query`

## Methods

```js
const parseQuery = require('parse_query');

parseQuery('?a=1&b');
// { a: '1', b: true }
```

## License

Copyright (c) 2018-2019, Michael Szmadzinski. (MIT License)

[travis-image]: https://travis-ci.org/smujmaiku/parse_query.svg?branch=master
[travis-url]: https://travis-ci.org/smujmaiku/parse_query
[codecov-image]: https://coveralls.io/repos/github/smujmaiku/parse_query/badge.svg
[codecov-url]: https://coveralls.io/github/smujmaiku/parse_query

