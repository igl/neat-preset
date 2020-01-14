module.exports = {
    extends: ['./react.js'],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['./', 'node_modules', '../../node_modules'],
            },
        },
    },
    globals: {
        __DEV__: true,
        __TEST__: true,
        process: true,
    },
}
