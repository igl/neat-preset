# neat-presets

My highly opinionated _batteries included_ plugin-bundle for [nextjs](https://nextjs.org/) applications

-   Babel presets for next `@neat-preset/babel/next` and node `@neat-preset/babel/node`
-   Production ready next configuration at `@neat-preset/next` which is including `next-env`, `next-images` and `next-fonts`
-   Adds dotenv loading behaviour similar to `create-react-app`
-   Adds global dev-expression (compiling `__DEV__` to `true` or `false` based on your `NODE_ENV` passed to `next build`)
-   Includes my favorite babel plugins like `babel-plugin-macros` and export-syntax extensions [See list below](#included-libraries)

## Usage

yarn add @neat-preset/next
yarn add --dev @neat-preset/next-dev @neat-preset/babel

Create a `.env`

```
NEXT_SERVER_TEST_1=ONLY_ON_SSR
NEXT_PUBLIC_TEST_1=INJECTED_BY_SSR  // available/exposed in the browser
NEXT_STATIC_TEST_1=STATIC_TEXT      // embedded in the js bundles on build time (use this in nextjs serverless mode!)
```

Ignore .env.local files in your `.gitignore`

```
.env.local
.env.*.local
```

[What other env files can i use?](https://github.com/formatlos/dotenv-load#what-other-env-files-can-i-use).

### Babel for Nextjs Clients

```js
{
  "presets": [
    ["@neat-preset/babel/next", {
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

### Babel for Node

```js
{
  "presets": [
    ["@neat-preset/babel/node", {
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
const withNeat = require('@neat-preset/next-dev')({
    css: {
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]',
        },
    },
})

module.exports = withNeat({
    target: 'serverless',
})
```

With images from a different remote or inlined images with size limit:

```js
module.exports = require('@neat-preset/next-dev')({
    fonts: {
        assetPrefix: 'https://example.com',
        inlineImageLimit: 16384, // default is 8192
    },
})({
    target: 'serverless',
})
```

With fonts from a different remote or include SVG fonts:

```js
module.exports = require('@neat-preset/next-dev')({
    fonts: {
        assetPrefix: 'https://example.com',
        enableSvg: true,
    },
})({
    target: 'serverless',
})
```

With Custom env variable prefixes:

```js
module.exports = require('@neat-preset/next-dev')({
    env: {
        staticPrefix: 'NEXT_APP_STATIC_',
        publicPrefix: 'NEXT_APP_PUBLIC_',
    },
})({
    target: 'serverless',
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

-   [@zeit/next-css](https://www.npmjs.com/package/@zeit/next-css)
-   [@zeit/next-typescript](https://www.npmjs.com/package/@zeit/next-typescript)
-   [next-images](https://www.npmjs.com/package/next-images)
-   [next-fonts](https://www.npmjs.com/package/next-fonts)
-   [next-env](https://www.npmjs.com/package/next-env)
-   [dotenv-load](https://www.npmjs.com/package/dotenv-load)

-   [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
-   [@babel/preset-typescript](https://www.npmjs.com/package/@babel/core)
-   [babel-plugin-macros](https://www.npmjs.com/package/babel-plugin-macros)
-   [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
-   [babel-plugin-jsx-control-statements](https://www.npmjs.com/package/babel-plugin-jsx-control-statements)
-   [@babel/plugin-proposal-export-default-from](https://www.npmjs.com/package/@babel/plugin-proposal-export-default-from)
-   [@babel/plugin-proposal-export-namespace-from](https://www.npmjs.com/package/@babel/plugin-proposal-export-namespace-from)
-   [@babel/plugin-proposal-optional-catch-binding](https://www.npmjs.com/package/@babel/plugin-proposal-optional-catch-binding)
-   [@babel/plugin-proposal-throw-expressions](https://www.npmjs.com/package/@babel/plugin-proposal-throw-expressions)
-   [@babel/plugin-proposal-optional-chaining](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining)
-   [@babel/plugin-syntax-dynamic-import](https://www.npmjs.com/package/@babel/plugin-syntax-dynamic-import)
-   [@babel/plugin-transform-destructuring](https://www.npmjs.com/package/@babel/plugin-transform-destructuring)
-   [@babel/plugin-transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime)
-   [@babel/runtime-corejs2](https://www.npmjs.com/package/@babel/runtime-corejs2)
-   [@babel/plugin-transform-spread](https://www.npmjs.com/package/@babel/plugin-transform-spread)
-   [@babel/register](https://www.npmjs.com/package/@babel/register)
-   [@babel/cli](https://www.npmjs.com/package/@babel/cli)
-   [@babel/core](https://www.npmjs.com/package/@babel/core)
