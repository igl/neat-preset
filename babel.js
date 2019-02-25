module.exports = (context, options = {})) => {
    const nextBabel = options['next/babel'] || {}

    return {
        presets: [
            [ 'next/babel', nextBabel ]
        ],
        plugins: require('./babel-plugins')(options)
    }
}
