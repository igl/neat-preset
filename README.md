next-but-one
------------

My highly opinionated next-plugin-bundle.

Includes:

- @zeit/next-css
- next-images
- next-fonts
- next-env
- dotenv-load

enjoy!

## Options

With CSS modules and options

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


With images from a different remote or inlined images with size limit

```js
// next.config.js
const withNextButOne = require('next-but-one')
module.exports = withNextButOne({
    font: {
        assetPrefix: 'https://example.com',
        inlineImageLimit: 16384,
    }
})
```


With fonts from a different remote or include SVG fonts

```js
// next.config.js
const withNextButOne = require('next-but-one')
module.exports = withNextButOne({
    font: {
        assetPrefix: 'https://example.com',
        enableSvg: true,
    }
})
```


With Custom env variable prefixes

```js
// next.config.js
const withNextButOne = require('next-but-one')
module.exports = withNextButOne({
    env: {
        staticPrefix: 'CUSTOM_STATIC_',
        publicPrefix: 'CUSTOM_PUBLIC_',
    }
})
```

