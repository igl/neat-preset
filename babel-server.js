module.exports = () => ({
    presets: [
        [
            '@babel/preset-env',
            {
                'useBuiltIns': 'usage',
                'targets': {
                    'node': 'current'
                }
            }
        ]
    ],
    plugins: require('./babel-plugins')
})
