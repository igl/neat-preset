module.exports = {
    extends: ['./react.js'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/react-in-jsx-scope': 0,
    },
    globals: {
        __DEV__: true,
        __TEST__: true,
        process: true,
        React: 'writable',
    },
}
