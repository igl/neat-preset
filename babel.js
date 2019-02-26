module.exports = (context, options = {}) => {
    return {
        presets: [
            [ 'next/babel', options ]
        ],
        plugins: require('./babel-plugins')(options)
    }
}
