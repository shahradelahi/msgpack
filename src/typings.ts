export type ObjectLike =
  | Record<string | number | symbol, unknown>
  | Array<unknown>
  | BufferLike
  | object;

export type BufferLike =
  | Buffer
  | Uint8Array
  | ArrayLike<number>
  | ArrayBufferView
  | ArrayBufferLike;

export interface EncoderOptions {
  /**
   * Encodes bigint as Int64 or Uint64 if it's set to true.
   * {@link forceIntegerToFloat} does not affect bigint.
   * Depends on ES2020's {@link DataView#setBigInt64} and
   * {@link DataView#setBigUint64}.
   *
   * Defaults to false.
   */
  useBigInt64: boolean;

  /**
   * The maximum depth in nested objects and arrays.
   *
   * Defaults to 100.
   */
  maxDepth: number;

  /**
   * The initial size of the internal buffer.
   *
   * Defaults to 2048.
   */
  initialBufferSize: number;

  /**
   * If `true`, the keys of an object is sorted. In other words, the encoded
   * binary is canonical and thus comparable to another encoded binary.
   *
   * Defaults to `false`. If enabled, it spends more time in encoding objects.
   */
  sortKeys: boolean;
  /**
   * If `true`, non-integer numbers are encoded in float32, not in float64 (the default).
   *
   * Only use it if precisions don't matter.
   *
   * Defaults to `false`.
   */
  forceFloat32: boolean;

  /**
   * If `true`, an object property with `undefined` value are ignored.
   * e.g. `{ foo: undefined }` will be encoded as `{}`, as `JSON.stringify()` does.
   *
   * Defaults to `false`. If enabled, it spends more time in encoding objects.
   */
  ignoreUndefined: boolean;

  /**
   * If `true`, integer numbers are encoded as floating point numbers,
   * with the `forceFloat32` option taken into account.
   *
   * Defaults to `false`.
   */
  forceIntegerToFloat: boolean;
}

export interface DecoderOptions {
  /**
   * Decodes Int64 and Uint64 as bigint if it's set to true.
   * Depends on ES2020's {@link DataView#getBigInt64} and
   * {@link DataView#getBigUint64}.
   *
   * Defaults to false.
   */
  useBigInt64: boolean;

  /**
   * Maximum string length.
   *
   * Defaults to 4_294_967_295 (UINT32_MAX).
   */
  maxStrLength: number;
  /**
   * Maximum binary length.
   *
   * Defaults to 4_294_967_295 (UINT32_MAX).
   */
  maxBinLength: number;
  /**
   * Maximum array length.
   *
   * Defaults to 4_294_967_295 (UINT32_MAX).
   */
  maxArrayLength: number;
  /**
   * Maximum map length.
   *
   * Defaults to 4_294_967_295 (UINT32_MAX).
   */
  maxMapLength: number;
  /**
   * Maximum extension length.
   *
   * Defaults to 4_294_967_295 (UINT32_MAX).
   */
  maxExtLength: number;

  /**
   * An object key decoder.
   * `null` is a special value to disable the use of the key decoder at all.
   */
  keyDecoder: KeyDecoder | null;
}

export interface KeyDecoder {
  canBeCached(byteLength: number): boolean;
  decode(bytes: Uint8Array, inputOffset: number, byteLength: number): string;
}
