module.exports = {
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:import/warnings',
        'plugin:import/errors',
        'plugin:jest/recommended',
    ],
    plugins: ['jest', 'import', 'simple-import-sort'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['./', 'src', 'node_modules', '../../node_modules'],
                extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts', '.json'],
            },
        },
        'import/ignore': ['node_modules'],
    },
    env: {
        es6: true,
        commonjs: true,
        browser: false,
        node: false,
        amd: false,
        mocha: false,
        jasmine: false,
    },
    globals: {
        __DEV__: true,
        __TEST__: true,
        __REV__: true,
    },
    ignorePatterns: ['**/~*', '**/*~'],
    rules: require('./rules/defaults'),
}
