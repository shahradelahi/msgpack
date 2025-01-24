import { describe, expect, test } from 'vitest';

import { MSGPack } from '@/index';

describe('MSGPack', () => {
  describe('encode', () => {
    test('should encode an object', () => {
      const input = { a: 'a', b: 1 };
      const encoded = MSGPack.encode(input);
      const expected = Buffer.from([0x82, 0xa1, 0x61, 0xa1, 0x61, 0xa1, 0x62, 0x01]);
      expect(encoded).toEqual(expected);
    });

    test('should encode sorted object', () => {
      const input = { b: 1, a: 'a' };
      const encoded = MSGPack.encode(input, { sortKeys: true });
      expect(encoded).toEqual(MSGPack.encode({ a: 'a', b: 1 }));
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
  });
});
