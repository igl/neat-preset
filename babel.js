module.exports = (context, options = {}) => {
    return {
        presets: [
            [ require('next/babel'), options ]
        ],
        plugins: [
            require('babel-plugin-jsx-control-statements'),
            ...require('./babel-plugins')(options)
        ]
    }
}
