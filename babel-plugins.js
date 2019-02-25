module.exports = (options = {}) => {
    const moduleResolverOptions = options['module-resolver'] || {}
    return [
        'babel-plugin-macros',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-optional-catch-binding',
        '@babel/plugin-proposal-throw-expressions',
        [ 'babel-plugin-module-resolver', { root: [ './' ], ...moduleResolverOptions } ]
    ]
}
