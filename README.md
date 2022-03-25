# mb_strwidth

mb_strwidth ported to JavaScript.

[![CircleCI](https://circleci.com/gh/demouth/mb_strwidth/tree/main.svg?style=svg)](https://circleci.com/gh/demouth/mb_strwidth/tree/main)

## Installation

```sh
npm install @demouth/mb_strwidth
```

## Examples

This package has the same result as `mb_strwidth()` in PHP.

```js
console.log(mb_strwidth('𩸽定食食べたい😭')); // 15
```

```php
// PHP 7.3.28
var_dump(mb_strwidth('𩸽定食食べたい😭')); // int(15)
```

https://www.php.net/manual/en/function.mb-strwidth.php
