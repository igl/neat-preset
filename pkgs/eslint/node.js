module.exports = {
    extends: ['./base.js'],
    env: {
        node: true,
    },
    rules: {
        ...require('./rules/defaults'),
        ...require('./rules/import'),
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['src', 'node_modules', '../../node_modules'],
            },
        },
    },
}
