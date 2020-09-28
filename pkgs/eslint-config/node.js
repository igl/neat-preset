module.exports = {
    extends: ['./base.js'],
    env: {
        node: true,
    },
    rules: {
        ...require('./rules/defaults'),
        ...require('./rules/import'),
    },
}
