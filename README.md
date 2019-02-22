next-but-one
------------

My highly opinionated plugin-bundle for nextjs applications.

Includes:

- [@zeit/next-css](https://www.npmjs.com/package/@zeit/next-css)
- [next-images](https://www.npmjs.com/package/next-images)
- [next-fonts](https://www.npmjs.com/package/next-fonts)
- [next-env](https://www.npmjs.com/package/next-env)
- [dotenv-load](https://www.npmjs.com/package/dotenv-load)
- [babel-plugin-macros](https://www.npmjs.com/package/babel-plugin-macros)
- [@babel/plugin-proposal-export-default-from](https://www.npmjs.com/package/@babel/plugin-proposal-export-default-from)
- [@babel/plugin-proposal-export-namespace-from](https://www.npmjs.com/package/@babel/plugin-proposal-export-namespace-from)
- [@babel/plugin-proposal-optional-catch-binding](https://www.npmjs.com/package/@babel/plugin-proposal-optional-catch-binding)
- [@babel/plugin-proposal-throw-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-throw-expressions)
- [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)

enjoy!


## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withNextButOne = require('next-but-one')
module.exports = withNextButOne()
```

Create a `.babelrc` in your project

```js
{
  "presets": [
    "next-but-one/babel"
  ]
}
```

---


## Configuration

Optionally you can pass custom plugin configuration.


With CSS modules and options:

```js
// next.config.js
const withNextButOne = require('next-but-one')
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
    font: {
        assetPrefix: 'https://example.com',
        inlineImageLimit: 16384, // default is 8192
    }
})
```


With fonts from a different remote or include SVG fonts:

```js
module.exports = withNextButOne({
    font: {
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

