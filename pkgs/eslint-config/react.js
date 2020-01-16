module.exports = {
    extends: ['./base.js'],
    plugins: ['react', 'react-hooks', 'jsx-control-statements'],
    env: {
        browser: true,
    },
    rules: {
        ...require('./rules/defaults'),
        ...require('./rules/import'),
        ...require('./rules/react'),
        ...require('./rules/jsx-control-statements'),
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['./src', 'node_modules', '../../node_modules'],
            },
        },
    },
}
