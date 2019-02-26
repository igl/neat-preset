module.exports = (context, options = {}) => {
    const presetEnvOptions = {
        useBuiltIns: 'usage',
        targets: {
            node: 'current'
        },
        ...(options['preset-env'] || {})
    }

    return {
        presets: [
            [ '@babel/preset-env', presetEnvOptions ]
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-destructuring',
            '@babel/plugin-transform-spread',
            [ '@babel/plugin-transform-runtime', {
                corejs: 2,
                helpers: true,
                regenerator: true,
                useESModules: false,
                ...(options['transform-runtime'] || {})
            }],
            ...require('./babel-plugins')(options)
        ]
    }
}
