module.exports = (context, options = {}) => {
    const configure = require('./configure')

    const presetEnvOptions = configure.presetEnv(options, 'node')
    const presetTypescriptOptions = configure.typescript(options, 'node')
    const transformRuntimeOptions = configure.transformRuntime(options, 'node')
    const transformDefineOptions = configure.transformDefine(options, 'node')
    const moduleResolverOptions = configure.moduleResolver(options, 'node')

    return {
        presets: [
            [require('@babel/preset-env').default, presetEnvOptions],
            [require('@babel/preset-typescript'), presetTypescriptOptions],
        ],
        plugins: [
            // stuff that ships with next/babel and we want node-code to have equal features as the next code
            [require('@babel/plugin-syntax-dynamic-import')],
            [require('@babel/plugin-transform-destructuring')],
            [require('@babel/plugin-transform-spread')],
            [require('@babel/plugin-transform-runtime'), transformRuntimeOptions],

            // additional babel plugins
            [require('babel-plugin-macros')],
            [require('@babel/plugin-proposal-export-default-from')],
            [require('@babel/plugin-proposal-export-namespace-from')],
            [require('@babel/plugin-proposal-throw-expressions')],
            [require('babel-plugin-dev-expression')],
            [require('babel-plugin-transform-define'), transformDefineOptions],
            [require('babel-plugin-module-resolver'), moduleResolverOptions],
        ],
    }
}
