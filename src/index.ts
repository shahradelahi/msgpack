import { decode as _decode, encode as _encode } from '@msgpack/msgpack';

import type { BufferLike, DecoderOptions, EncoderOptions, ObjectLike } from '@/typings';

export class MSGPack {
  /**
   * Parses a base64 encoded string into its original form.
   *
   * @param input - A base64 encoded string to be parsed.
   * @param options - Optional decoder options for the msgpack decode function.
   * @returns The decoded object or value.
   * @throws {TypeError} If the input is not a valid base64 encoded string.
   */
  public static parse(input: string, options?: Partial<DecoderOptions>): unknown {
    if (typeof (input as unknown) !== 'string') {
      throw new TypeError('input must be a string encoded in base64');
    }

    // Feature for the times you want to move from JSON to msgpack
    if (input.at(0) === '{') {
      return JSON.parse(input);
    }

    const buffer = Buffer.from(input, 'base64');
    return decode(buffer, options);
  }

  /**
   * Stringifies an object or value into a base64 encoded string.
   *
   * @param {ObjectLike} input - An object or value to be stringified.
   * @param options - Optional encoder options for the msgpack encode function.
   * @returns A base64 encoded string representing the input object or value.
   * @throws {TypeError} If the input is not an object.
   */
  public static stringify(input: ObjectLike, options?: Partial<EncoderOptions>): string {
    return Buffer.from(encode(input, options)).toString('base64');
  }
}

export function encode(input: ObjectLike, options?: Partial<EncoderOptions>): Uint8Array {
  if (!isObjectLike(input)) {
    throw new TypeError('input must be an object');
  }

  return _encode(input, options);
}

export function decode(input: BufferLike, options?: Partial<DecoderOptions>): unknown {
  return _decode(input, options);
}

export function isObjectLike(input: unknown): boolean {
  return typeof input === 'object' && input !== null;
}

export function isBase64(input: any): boolean {
  if (typeof input !== 'string') {
    return false;
  }

  return /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(input);
}

export default MSGPack;

export type { EncoderOptions, DecoderOptions, ObjectLike, KeyDecoder } from './typings';
