# mb_strwidth

mb_strwidth ported to JavaScript.

Calculates the width of a string, where halfwidth characters count as 1, and fullwidth characters count as 2.
See » http://www.unicode.org/reports/tr11/ for details regarding East Asian character widths.


[![CircleCI](https://circleci.com/gh/demouth/mb_strwidth/tree/main.svg?style=svg)](https://circleci.com/gh/demouth/mb_strwidth/tree/main)

## Installation

Using npm:
```sh
npm install @demouth/mb_strwidth
```

Using unpkg CDN:
```html
<script src="https://unpkg.com/@demouth/mb_strwidth@1.0.0/dist/mb_strwidth.min.js"></script>
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
