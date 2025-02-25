import { describe, expect, test } from 'vitest';

import { encode, MSGPack } from '@/index';

describe('MSGPack', () => {
  describe('encode', () => {
    test('should encode an object', () => {
      const input = { a: 'a', b: 1 };
      const encoded = encode(input);
      const expected = new Uint8Array([0x82, 0xa1, 0x61, 0xa1, 0x61, 0xa1, 0x62, 0x01]);
      expect(encoded).toEqual(expected);
    });

    test('should encode sorted object', () => {
      const input = { b: 1, a: 'a' };
      const encoded = encode(input, { sortKeys: true });
      expect(encoded).toEqual(encode({ a: 'a', b: 1 }));
    });
  });

  describe('stringify', () => {
    test('should stringify an object', () => {
      const input = { a: 'a', b: 1 };
      const encoded = MSGPack.stringify(input);
      const expected = Buffer.from([0x82, 0xa1, 0x61, 0xa1, 0x61, 0xa1, 0x62, 0x01]).toString(
        'base64'
      );
      expect(encoded).toEqual(expected);
    });

    test('should stringify values beyond the basic Latin1 range', () => {
      const input = { hello: '👋', world: '🌍' };
      const encoded = MSGPack.stringify(input);
      const decoded = MSGPack.parse(encoded);
      expect(decoded).toEqual(input);
    });
  });
});
