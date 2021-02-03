module.exports = {
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': ['error', 'never'],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 0,
    'import/no-mutable-exports': 'error',
    'import/no-namespace': 0,
    'import/no-unresolved': ['error', { commonjs: true, amd: true, caseSensitive: true }],
}
