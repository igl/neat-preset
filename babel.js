module.exports = (context, options = {}) => {
    const styledComponentsOptions = options['styled-components'] || {}

    return {
        presets: [
            [ 'next/babel', options ]
        ],
        plugins: [
            require('babel-plugin-jsx-control-statements'),
            ...require('./lib/babel-plugins')(options)
        ],
        env: {
            development: {
                plugins: [
                    [ require('babel-plugin-styled-components'), { ssr: true, displayName: true, minify: false, ...styledComponentsOptions } ]
                ]
            },
            production: {
                plugins: [
                    [ require('babel-plugin-styled-components'), { ssr: true, displayName: true, minify: true, ...styledComponentsOptions } ]
                ]
            }
        }
    }
}
