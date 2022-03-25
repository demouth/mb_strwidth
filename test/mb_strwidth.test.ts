import mb_strwidth from '../src/mb_strwidth';

describe('mb_strwidth test', (): void => {
  test('0 width', (): void => {
    expect(mb_strwidth('')).toBe(0);
  });

  test('halfwidth', (): void => {
    expect(mb_strwidth('A')).toBe(1);
    expect(mb_strwidth('12 aB.,')).toBe(7);
    expect(mb_strwidth('…')).toBe(1);
    expect(mb_strwidth('※')).toBe(1);
    expect(mb_strwidth('★')).toBe(1);
    expect(mb_strwidth('△')).toBe(1);
    expect(mb_strwidth('■')).toBe(1);
    expect(mb_strwidth('①')).toBe(1);
    expect(mb_strwidth('✅')).toBe(1);
    expect(mb_strwidth('😭')).toBe(1);
  });

  test('fullwidth', (): void => {
    expect(mb_strwidth('あ')).toBe(2);
    expect(mb_strwidth('富士山')).toBe(6);
    expect(mb_strwidth('𩸽')).toBe(2);
    expect(mb_strwidth('𠮷')).toBe(2);
    expect(mb_strwidth('𩸽定食')).toBe(6);

    // U+1100-U+115F
    expect(mb_strwidth('ᄀ')).toBe(2); // 1100
    // U+11A3-U+11A7
    expect(mb_strwidth('ᆣ')).toBe(2); // 11A3
    // U+11FA-U+11FF
    expect(mb_strwidth('ᇺ')).toBe(2); // 11FA
    // U+2329-U+232A
    expect(mb_strwidth('〈')).toBe(2); // 2329
    // U+2E80-U+2E99
    expect(mb_strwidth('⺀')).toBe(2); // 2E80
    // U+2E9B-U+2EF3
    expect(mb_strwidth('⺛')).toBe(2); // 2E9B
    // U+2F00-U+2FD5
    expect(mb_strwidth('⼀')).toBe(2); // 2F00
    // U+2FF0-U+2FFB
    expect(mb_strwidth('⿰')).toBe(2); // 2FF0
    // U+3000-U+303E
    expect(mb_strwidth('　')).toBe(2); // 3000
    // U+3041-U+3096
    expect(mb_strwidth('ぁ')).toBe(2); // 3041
    // U+3099-U+30FF
    expect(mb_strwidth('゙')).toBe(2); // 3099
    // U+3105-U+312D
    expect(mb_strwidth('ㄅ')).toBe(2); // 3105
    // U+3131-U+318E
    expect(mb_strwidth('ㄱ')).toBe(2); // 3131
    // U+3190-U+31BA
    expect(mb_strwidth('㆐')).toBe(2); // 3190
    // U+31C0-U+31E3
    expect(mb_strwidth('㇀')).toBe(2); // 31C0
    // U+31F0-U+321E
    expect(mb_strwidth('ㇰ')).toBe(2); // 31F0
    // U+3220-U+3247
    expect(mb_strwidth('㈠')).toBe(2); // 3220
    // U+3250-U+32FE
    expect(mb_strwidth('㉐')).toBe(2); // 3250
    // U+3300-U+4DBF
    expect(mb_strwidth('㌀')).toBe(2); // 3300
    // U+4E00-U+A48C
    expect(mb_strwidth('一')).toBe(2); // 4E00
    // U+A490-U+A4C6
    expect(mb_strwidth('꒐')).toBe(2); // A490
    // U+A960-U+A97C
    expect(mb_strwidth('ꥠ')).toBe(2); // A960
    // U+AC00-U+D7A3
    expect(mb_strwidth('가')).toBe(2); // AC00
    // U+D7B0-U+D7C6
    expect(mb_strwidth('ힰ')).toBe(2); // D7B0
    // U+D7CB-U+D7FB
    expect(mb_strwidth('ퟋ')).toBe(2); // D7CB
    // U+F900-U+FAFF
    expect(mb_strwidth('豈')).toBe(2); // F900
    // U+FE10-U+FE19
    expect(mb_strwidth('︐')).toBe(2); // FE10
    // U+FE30-U+FE52
    expect(mb_strwidth('︰')).toBe(2); // FE30
    // U+FE54-U+FE66
    expect(mb_strwidth('﹔')).toBe(2); // FE54
    // U+FE68-U+FE6B
    expect(mb_strwidth('﹨')).toBe(2); // FE68
    // U+FF01-U+FF60
    expect(mb_strwidth('！')).toBe(2); // FF01
    // U+FFE0-U+FFE6
    expect(mb_strwidth('￠')).toBe(2); // FFE0
    // U+1B000-U+1B001
    expect(mb_strwidth('𛀀')).toBe(2); // 1B000
    // U+1F200-U+1F202
    expect(mb_strwidth('🈀')).toBe(2); // 1F200
    // U+1F210-U+1F23A
    expect(mb_strwidth('🈐')).toBe(2); // 1F210
    // U+1F240-U+1F248
    expect(mb_strwidth('🉀')).toBe(2); // 1F240
    // U+1F250-U+1F251
    expect(mb_strwidth('🉐')).toBe(2); // 1F250
    // U+20000-U+2FFFD
    expect(mb_strwidth('𠀀')).toBe(2); // 20000
    // U+30000-U+3FFFD
    expect(mb_strwidth('𰀀')).toBe(2); // 30000
  });

  test('mix', (): void => {
    expect(mb_strwidth('あ A123　𩸽')).toBe(11);
    expect(mb_strwidth('𩸽定食食べたい😭')).toBe(15);
  });
});
