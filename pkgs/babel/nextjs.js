module.exports = (context, options = {}) => {
    const configure = require('./configure')

    const styledComponentsOptions = configure.styledComponents(options, 'nextjs')
    const transformDefineOptions = configure.transformDefine(options, 'nextjs')
    const moduleResolverOptions = configure.moduleResolver(options, 'nextjs')

    return {
        presets: [
            // should be a peer-dep
            // eslint-disable-next-line import/no-unresolved
            [require('next/babel')],
        ],
        plugins: [
            // frontend only
            [require('babel-plugin-styled-components'), styledComponentsOptions],

            // additional babel plugins
            [require('babel-plugin-macros')],
            [require('@babel/plugin-proposal-export-default-from')],
            [require('@babel/plugin-proposal-export-namespace-from')],
            [require('@babel/plugin-proposal-throw-expressions')],
            [require('babel-plugin-transform-define'), transformDefineOptions],
            [require('babel-plugin-module-resolver'), moduleResolverOptions],
        ],
    }
}
