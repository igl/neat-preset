module.exports = (context, options = {}) => {
    const configure = require('./configure')

    const presetEnvOptions = configure.presetEnv(options, 'react')
    const presetTypescriptOptions = configure.typescript(options, 'react')
    const styledComponentsOptions = configure.styledComponents(options, 'react')
    const semanticUIImportsOptions = configure.semanticUIImports(options, 'react')
    const transformDefineOptions = configure.transformDefine(options, 'react')
    const moduleResolverOptions = configure.moduleResolver(options, 'react')

    return {
        presets: [
            [require('@babel/preset-react').default],
            [require('@babel/preset-env').default, presetEnvOptions],
            [require('@babel/preset-typescript'), presetTypescriptOptions],
        ],
        plugins: [
            // frontend only
            [require('babel-plugin-jsx-control-statements')],
            [require('babel-plugin-styled-components'), styledComponentsOptions],
            [require('babel-plugin-transform-semantic-ui-react-imports'), semanticUIImportsOptions],

            // additional babel plugins
            [require('babel-plugin-macros')],
            [require('@babel/plugin-proposal-export-default-from')],
            [require('@babel/plugin-proposal-export-namespace-from')],
            [require('@babel/plugin-proposal-optional-catch-binding')],
            [require('@babel/plugin-proposal-optional-chaining')],
            [require('@babel/plugin-proposal-throw-expressions')],
            [require('babel-plugin-transform-define'), transformDefineOptions],
            [require('babel-plugin-module-resolver'), moduleResolverOptions],
        ],
    }
}
