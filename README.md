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
<script src="https://unpkg.com/@demouth/mb_strwidth@2.0.1/dist/mb_strwidth.min.js"></script>
```

## Examples

This package has the same result as `mb_strwidth()` in PHP.

ES Module:
```js
import { mb_strwidth } from "@demouth/mb_strwidth";
console.log(mb_strwidth("𠮷野家")); // 6
```

CommonJS:
```js
const { mb_strwidth } = require("@demouth/mb_strwidth");
console.log(mb_strwidth("𩸽定食食べたい😭")); // 15
```

Browser:
```html
<script src="https://unpkg.com/@demouth/mb_strwidth@2.0.1/dist/mb_strwidth.min.js"></script>
<script>
  console.log(mb_strwidth("𩸽定食食べたい😭")); // 15
</script>
```

Reference(PHP 7.3.28):
```php
var_dump(mb_strwidth('𩸽定食食べたい😭')); // int(15)
```

https://www.php.net/manual/en/function.mb-strwidth.php
