module.exports = {
    'import/default': 'error',
    'import/export': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-namespace': 0,
    'import/no-unresolved': ['error', { commonjs: true, amd: true, caseSensitive: true }],
}
