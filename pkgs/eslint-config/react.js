module.exports = {
    extends: ['./base.js'],
    plugins: ['react', 'react-hooks'],
    env: {
        browser: true,
    },
    rules: {
        ...require('./rules/defaults'),
        ...require('./rules/import'),
        ...require('./rules/react'),
    },
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
}
