module.exports = () => ({
    presets: [
        'next/babel'
    ],
    plugins: [
        [ 'babel-plugin-macros' ],
        [ '@babel/plugin-proposal-export-default-from' ],
        [ '@babel/plugin-proposal-export-namespace-from' ],
        [ '@babel/plugin-proposal-optional-catch-binding' ],
        [ '@babel/plugin-proposal-throw-expressions' ],
        [ 'babel-plugin-module-resolver', { 'root': [ './' ] } ]
    ]
})
