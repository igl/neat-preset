module.exports = (options = {}) => {
    const optionalChainingOptions = options['optional-chaining'] || {}
    const transformDefineOptions = options['transform-define'] || {}
    const moduleResolverOptions = typeof options['module-resolver'] === 'string'
        ? { root: options['module-resolver'].split(';') }
        : (options['module-resolver'] || {})

    return [
        require('babel-plugin-macros'),
        require('@babel/plugin-proposal-export-default-from'),
        require('@babel/plugin-proposal-export-namespace-from'),
        require('@babel/plugin-proposal-optional-catch-binding'),
        require('@babel/plugin-proposal-throw-expressions'),
        [ require('@babel/plugin-proposal-optional-chaining'), { loose: true, ...optionalChainingOptions } ],
        [ require('babel-plugin-transform-define'), { __DEV__: process.env.NODE_ENV !== 'production', ...transformDefineOptions } ],
        [ require('babel-plugin-module-resolver'), { root: [ './' ], ...moduleResolverOptions } ]
    ]
}
