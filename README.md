# @se-oss/msgpack

[![CI](https://github.com/shahradelahi/msgpack/actions/workflows/ci.yml/badge.svg)](https://github.com/shahradelahi/msgpack/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@se-oss/msgpack.svg)](https://www.npmjs.com/package/@se-oss/msgpack)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](/LICENSE)
[![Install Size](https://packagephobia.com/badge?p=@se-oss/msgpack)](https://packagephobia.com/result?p=@se-oss/msgpack)

A lightweight utility for encoding objects and buffers into base64 MessagePack and decoding them back to their original form. Provides seamless conversion between JSON and MessagePack, with support for custom encoding and decoding options.

---

- [Installation](#-installation)
- [Usage](#-usage)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#license)

## 📦 Installation

```bash
npm install @se-oss/msgpack
```

## 📖 Usage

```typescript
import { MSGPack } from '@se-oss/msgpack';

// Basic usage example to stringify object to Base64
const obj = { hello: 'world', numbers: [1, 2, 3], nested: { a: 1, b: 2 } };
const encoded = MSGPack.stringify(obj);
console.log('Encoded:', encoded);

const decoded = MSGPack.parse(encoded);
console.log('Decoded:', decoded);

// Using with custom options
const customEncoded = MSGPack.stringify(obj, {
  maxDepth: 3,
  ignoreUndefined: true,
});
console.log('Custom encoded:', customEncoded);
```

## 📚 Documentation

For all configuration options, please see [the API docs](https://www.jsdocs.io/package/@se-oss/msgpack).

##### API

<!-- prettier-ignore -->
```typescript
class MSGPack {
  /**
   * Parses a base64 encoded string into its original form.
   *
   * @param input - A base64 encoded string to be parsed.
   * @param options - Optional decoder options for the msgpack decode function.
   * @returns The decoded object or value.
   * @throws {TypeError} If the input is not a valid base64 encoded string.
   */
  static parse(input: string, options?: Partial<DecoderOptions>): unknown;

  /**
   * Stringifies an object or value into a base64 encoded string.
   *
   * @param {ObjectLike} input - An object or value to be stringified.
   * @param options - Optional encoder options for the msgpack encode function.
   * @returns A base64 encoded string representing the input object or value.
   * @throws {TypeError} If the input is not an object.
   */
  static stringify(input: ObjectLike, options?: Partial<EncoderOptions> ): string;
}
```

## 🤝 Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/msgpack)

Thanks again for your support, it is much appreciated! 🙏

## Relevant

- [MessagePack](https://msgpack.org/)
- [@msgpack/msgpack](https://github.com/msgpack/msgpack-javascript)

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/msgpack/graphs/contributors).
