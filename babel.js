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
                    [ "styled-components", { "ssr": true, "displayName": true, "preprocess": false, ...styledComponentsOptions } ]
                ]
            },
            production: {
                plugins: [
                    [ "styled-components", { "ssr": true, "displayName": false, "preprocess": false, ...styledComponentsOptions } ]
                ]
            }
        }
    }
}
