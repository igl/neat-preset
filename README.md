# neat-presets

My highly opinionated _batteries included_ plugin-bundles

-   Babel presets for next `@neat-preset/babel/next` and node `@neat-preset/babel/node`
-   Production ready next configuration at `@neat-preset/next` which is including, `next-images` and `next-fonts`
-   Adds dotenv loading behaviour similar to `create-react-app`
-   Adds global dev-expression (compiling `__DEV__` to `true` or `false` based on your `NODE_ENV` on build-time)
-   Includes my favorite babel plugins like `babel-plugin-macros` and export-syntax extensions [See list below](#included-libraries)

## Usage

yarn add @neat-preset/next
yarn add --dev @neat-preset/next-dev @neat-preset/babel

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

With images from a different host and inlined images by size limit:

```js
module.exports = require('@neat-preset/next-dev')({
    images: {
        assetPrefix: 'https://images.example.com',
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
        assetPrefix: 'https://fonts.example.com',
        enableSvg: true,
    },
})({
    target: 'serverless',
})
```

List `node_modules/` that should be transpiled before being included by webpack

```js
module.exports = require('@neat-preset/next-dev')({
    transpileModules: ['somemodule', 'and-another'],
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

-   [@zeit/next-typescript](https://www.npmjs.com/package/@zeit/next-typescript)
-   [next-images](https://www.npmjs.com/package/next-images)
-   [next-fonts](https://www.npmjs.com/package/next-fonts)
-   [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules)

-   [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
-   [babel-plugin-macros](https://www.npmjs.com/package/babel-plugin-macros)
-   [@babel/register](https://www.npmjs.com/package/@babel/register)
-   [@babel/cli](https://www.npmjs.com/package/@babel/cli)
-   [@babel/core](https://www.npmjs.com/package/@babel/core)
-   [@babel/runtime](https://www.npmjs.com/package/@babel/core)
-   [and more...](./pkgs/babel/package.json)...
