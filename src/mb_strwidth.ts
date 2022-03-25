/**
 * mb_strwidth
 *
 * The fullwidth characters are: U+1100-U+115F, U+11A3-U+11A7, U+11FA-U+11FF, U+2329-U+232A, U+2E80-U+2E99, U+2E9B-U+2EF3, U+2F00-U+2FD5, U+2FF0-U+2FFB, U+3000-U+303E, U+3041-U+3096, U+3099-U+30FF, U+3105-U+312D, U+3131-U+318E, U+3190-U+31BA, U+31C0-U+31E3, U+31F0-U+321E, U+3220-U+3247, U+3250-U+32FE, U+3300-U+4DBF, U+4E00-U+A48C, U+A490-U+A4C6, U+A960-U+A97C, U+AC00-U+D7A3, U+D7B0-U+D7C6, U+D7CB-U+D7FB, U+F900-U+FAFF, U+FE10-U+FE19, U+FE30-U+FE52, U+FE54-U+FE66, U+FE68-U+FE6B, U+FF01-U+FF60, U+FFE0-U+FFE6, U+1B000-U+1B001, U+1F200-U+1F202, U+1F210-U+1F23A, U+1F240-U+1F248, U+1F250-U+1F251, U+20000-U+2FFFD, U+30000-U+3FFFD. All other characters are halfwidth characters.
 *
 * @see https://www.php.net/manual/en/function.mb-strwidth.php
 */
export default (str = ''): number => {
  let length = 0;
  const chars = Array.from(str);
  for (const char of chars) {
    const cp = char.codePointAt(0);
    if (cp === undefined) continue;

    if (0x1100 <= cp && cp <= 0x115F) {
      length += 2;
    } else if (0x11A3 <= cp && cp <= 0x11A7) {
      length += 2;
    } else if (0x11FA <= cp && cp <= 0x11FF) {
      length += 2;
    } else if (0x2329 <= cp && cp <= 0x232A) {
      length += 2;
    } else if (0x2E80 <= cp && cp <= 0x2E99) {
      length += 2;
    } else if (0x2E9B <= cp && cp <= 0x2EF3) {
      length += 2;
    } else if (0x2F00 <= cp && cp <= 0x2FD5) {
      length += 2;
    } else if (0x2FF0 <= cp && cp <= 0x2FFB) {
      length += 2;
    } else if (0x3000 <= cp && cp <= 0x303E) {
      length += 2;
    } else if (0x3041 <= cp && cp <= 0x3096) {
      length += 2;
    } else if (0x3099 <= cp && cp <= 0x30FF) {
      length += 2;
    } else if (0x3105 <= cp && cp <= 0x312D) {
      length += 2;
    } else if (0x3131 <= cp && cp <= 0x318E) {
      length += 2;
    } else if (0x3190 <= cp && cp <= 0x31BA) {
      length += 2;
    } else if (0x31C0 <= cp && cp <= 0x31E3) {
      length += 2;
    } else if (0x31F0 <= cp && cp <= 0x321E) {
      length += 2;
    } else if (0x3220 <= cp && cp <= 0x3247) {
      length += 2;
    } else if (0x3250 <= cp && cp <= 0x32FE) {
      length += 2;
    } else if (0x3300 <= cp && cp <= 0x4DBF) {
      length += 2;
    } else if (0x4E00 <= cp && cp <= 0xA48C) {
      length += 2;
    } else if (0xA490 <= cp && cp <= 0xA4C6) {
      length += 2;
    } else if (0xA960 <= cp && cp <= 0xA97C) {
      length += 2;
    } else if (0xAC00 <= cp && cp <= 0xD7A3) {
      length += 2;
    } else if (0xD7B0 <= cp && cp <= 0xD7C6) {
      length += 2;
    } else if (0xD7CB <= cp && cp <= 0xD7FB) {
      length += 2;
    } else if (0xF900 <= cp && cp <= 0xFAFF) {
      length += 2;
    } else if (0xFE10 <= cp && cp <= 0xFE19) {
      length += 2;
    } else if (0xFE30 <= cp && cp <= 0xFE52) {
      length += 2;
    } else if (0xFE54 <= cp && cp <= 0xFE66) {
      length += 2;
    } else if (0xFE68 <= cp && cp <= 0xFE6B) {
      length += 2;
    } else if (0xFF01 <= cp && cp <= 0xFF60) {
      length += 2;
    } else if (0xFFE0 <= cp && cp <= 0xFFE6) {
      length += 2;
    } else if (0x1B000 <= cp && cp <= 0x1B001) {
      length += 2;
    } else if (0x1F200 <= cp && cp <= 0x1F202) {
      length += 2;
    } else if (0x1F210 <= cp && cp <= 0x1F23A) {
      length += 2;
    } else if (0x1F240 <= cp && cp <= 0x1F248) {
      length += 2;
    } else if (0x1F250 <= cp && cp <= 0x1F251) {
      length += 2;
    } else if (0x20000 <= cp && cp <= 0x2FFFD) {
      length += 2;
    } else if (0x30000 <= cp && cp <= 0x3FFFD) {
      length += 2;
    } else {
      length += 1;
    }
  }
  return length;
}
