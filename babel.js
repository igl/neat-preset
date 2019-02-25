module.exports = (context, options = {})) => {
    const nextBabelOptions = options['next/babel'] || {}
    return {
        presets: [
            [ "next/babel", nextBabelOptions ]
        ],
        plugins: require('./babel-plugins')(options)
    }
}
