module.exports = {
    extends: ['./react.js'],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['src', 'node_modules', '../../node_modules'],
            },
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
    },
    globals: {
        __DEV__: true,
        __TEST__: true,
        process: true,
        React: 'writable',
    },
}
