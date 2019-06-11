module.exports = (context, options = {}) => {
    const configure = require('./configure')

    const presetTypescriptOptions = configure.typescript(options, 'next')
    const styledComponentsOptions = configure.styledComponents(options, 'next')
    const transformDefineOptions = configure.transformDefine(options, 'next')
    const optionalChainingOptions = configure.optionalChaining(options, 'next')
    const moduleResolverOptions = configure.moduleResolver(options, 'next')

    return {
        presets: [
            [require('next/babel'), options],
            [require('@babel/preset-typescript'), presetTypescriptOptions],
        ],
        plugins: [
            // frontend only
            [require('babel-plugin-jsx-control-statements')],
            [require('babel-plugin-styled-components'), styledComponentsOptions],

            // additional babel plugins
            [require('babel-plugin-macros')],
            [require('@babel/plugin-proposal-export-default-from')],
            [require('@babel/plugin-proposal-export-namespace-from')],
            [require('@babel/plugin-proposal-optional-catch-binding')],
            [require('@babel/plugin-proposal-throw-expressions')],
            [require('@babel/plugin-proposal-partial-application')],
            [require('babel-plugin-transform-define'), transformDefineOptions],
            [require('@babel/plugin-proposal-optional-chaining'), optionalChainingOptions],
            [require('babel-plugin-module-resolver'), moduleResolverOptions],
        ],
    }
}
