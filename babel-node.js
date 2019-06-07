module.exports = (context, options = {}) => {
    const presetEnvOptions = {
        useBuiltIns: 'usage',
        corejs: '2',
        targets: {
            node: 'current'
        },
        ...(options['preset-env'] || {})
    }

    return {
        presets: [
            [ require('@babel/preset-env').default, presetEnvOptions ],
            [ require('@babel/preset-typescript'), { isTSX: truem, ...options['preset-typescript'] } ]
        ],
        plugins: [
            require('@babel/plugin-syntax-dynamic-import'),
            require('@babel/plugin-transform-destructuring'),
            require('@babel/plugin-transform-spread'),
            [ require('@babel/plugin-transform-runtime'), {
                corejs: 2,
                helpers: true,
                regenerator: true,
                useESModules: false,
                ...(options['transform-runtime'] || {})
            }],
            ...require('./lib/babel-plugins')(options)
        ]
    }
}
