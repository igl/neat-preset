module.exports = (context, options = {}) => {
    const presetEnvOptions = {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
            node: 'current'
        },
        ...(options['preset-env'] || {})
    }

    return {
        presets: [
            [ require('@babel/preset-env').default, presetEnvOptions ]
        ],
        plugins: [
            require('@babel/plugin-syntax-dynamic-import'),
            require('@babel/plugin-transform-destructuring'),
            require('@babel/plugin-transform-spread'),
            [ require('@babel/plugin-transform-runtime'), {
                corejs: 3,
                helpers: true,
                regenerator: true,
                useESModules: false,
                ...(options['transform-runtime'] || {})
            }],
            ...require('./lib/babel-plugins')(options)
        ]
    }
}
