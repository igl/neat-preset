uber-next
------------

[![npm version](https://img.shields.io/npm/v/uber-next.svg?style=flat-square)](https://www.npmjs.com/package/uber-next)
[![npm downloads](https://img.shields.io/npm/dm/uber-next.svg?style=flat-square)](https://www.npmjs.com/package/uber-next)

My highly opinionated *batteries included* plugin-bundle for [nextjs](https://nextjs.org/) applications

- Drop-in replacement for `next/babel`
- Ships babel presets for the client `uber-next/babel` and server `uber-next/babel-server`
- Production ready next configuration including `next-images`, `next-fonts` and `next-env`
- Adds dotenv loading behaviour similar to `create-react-app`
- Adds global dev-expression (compiling `__DEV__` to `true` or `false` based on your `NODE_ENV` passed to `next build`)
- Includes my favorite babel plugins like `babel-plugin-macros` and export-syntax extensions [See list below](#included-libraries)


## Usage

```js
// next.config.js
module.exports = require('uber-next')()
```

Create a `.babelrc` for your next app

```js
{
  "presets": [
    "uber-next/babel"
  ]
}
```

...and a `.babelrc` for your server app

```js
{
  "presets": [
    "uber-next/babel-server"
  ]
}
```

Create a `.env`

```
NEXT_SERVER_TEST_1=ONLY_ON_SSR
NEXT_PUBLIC_TEST_1=INJECTED_BY_SSR  // available/exposed in the browser
NEXT_STATIC_TEST_1=STATIC_TEXT      // embedded in the js bundles on build time
```

Ignore .env.local files in your `.gitignore`

```
.env.local
.env.*.local
```

[What other env files can i use?](https://github.com/formatlos/dotenv-load#what-other-env-files-can-i-use).


## Advanced

Optionally you can pass custom plugin configuration in your `next.config.js` and `.babelrc`.

### Browser `.babelrc`.

```js
{
  "presets": [
    ["uber-next/babel", {
      "preset-env": {},
      "transform-runtime": {},
      "module-resolver": {},
      "styled-jsx": {},
      "class-properties": {}
      "optional-chaining": {}
      "styled-components": {}
    }]
  ],
  "plugins": []
}
```

### Server `.babelrc`.

```js
{
  "presets": [
    ["uber-next/babel", {
      "preset-env": {},
      "transform-runtime": {},
      "module-resolver": {},
      "class-properties": {}
    }]
  ],
  "plugins": []
}
```


### `next.config.js`


With CSS modules and options:

```js
// next.config.js
const withNextButOne = require('uber-next')
module.exports = withNextButOne({
    css: {
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        }
    }
})
```


With images from a different remote or inlined images with size limit:

```js
module.exports = withNextButOne({
    fonts: {
        assetPrefix: 'https://example.com',
        inlineImageLimit: 16384, // default is 8192
    }
})
```


With fonts from a different remote or include SVG fonts:

```js
module.exports = withNextButOne({
    fonts: {
        assetPrefix: 'https://example.com',
        enableSvg: true,
    }
})
```


With Custom env variable prefixes:

```js
module.exports = withNextButOne({
    env: {
        staticPrefix: 'CUSTOM_STATIC_',
        publicPrefix: 'CUSTOM_PUBLIC_',
    }
})
```


## License

Licensed under the MIT License, Copyright © 2019-present Richard Keil

See [LICENSE](./LICENSE) for more information.


## Acknowledgements

This project is standing on the shoulders of giants as it is build on top
of earlier open-source work by clever folks all around the world.

Please check them out:

## Included Libraries

- [@zeit/next-css](https://www.npmjs.com/package/@zeit/next-css)
- [next-images](https://www.npmjs.com/package/next-images)
- [next-fonts](https://www.npmjs.com/package/next-fonts)
- [next-env](https://www.npmjs.com/package/next-env)
- [dotenv-load](https://www.npmjs.com/package/dotenv-load)

- [babel-plugin-macros](https://www.npmjs.com/package/babel-plugin-macros)
- [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
- [babel-plugin-jsx-control-statements](https://www.npmjs.com/package/babel-plugin-jsx-control-statements)
- [@babel/plugin-proposal-export-default-from](https://www.npmjs.com/package/@babel/plugin-proposal-export-default-from)
- [@babel/plugin-proposal-export-namespace-from](https://www.npmjs.com/package/@babel/plugin-proposal-export-namespace-from)
- [@babel/plugin-proposal-optional-catch-binding](https://www.npmjs.com/package/@babel/plugin-proposal-optional-catch-binding)
- [@babel/plugin-proposal-throw-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-throw-expressions)
- [@babel/plugin-proposal-optional-chaining](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining)
- [@babel/plugin-syntax-dynamic-import](https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import)
- [@babel/plugin-transform-destructuring](https://www.npmjs.com/package/@babel/plugin-transform-destructuring)
- [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime)
- [@babel/runtime-corejs2](https://www.npmjs.com/package/@babel/runtime-corejs2)
- [@babel/plugin-transform-spread](https://www.npmjs.com/package/@babel/plugin-transform-spread)
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [@babel/register](https://www.npmjs.com/package/@babel/register)
- [@babel/cli](https://www.npmjs.com/package/@babel/cli)
- [@babel/core](https://www.npmjs.com/package/@babel/core)
