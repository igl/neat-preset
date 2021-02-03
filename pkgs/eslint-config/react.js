module.exports = {
    extends: ['plugin:react-hooks/recommended', 'plugin:jsx-a11y/recommended', './base.js'],
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
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
    },
}
