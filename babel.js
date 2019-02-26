module.exports = (context, options = {}) => {
    return {
        presets: [
            [ require('next/babel'), options ]
        ],
        plugins: require('./babel-plugins')(options)
    }
}
