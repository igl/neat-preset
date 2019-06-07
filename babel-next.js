module.exports = (context, options = {}) => {

    const styledComponentsOptions = {
        ssr: true,
        displayName: true, 
        ...options['styled-components']
    }

    const presetTypescriptOptions = {
        isTSX: true,
        ...options['preset-typescript']
    }

    return {
        presets: [
            [ require('next/babel'), options ],
            [ require('@babel/preset-typescript'), presetTypescriptOptions ]
        ],
        plugins: [
            require('babel-plugin-jsx-control-statements'),
            ...require('./lib/babel-plugins')(options)
        ],
        env: {
            development: {
                plugins: [
                    [ require('babel-plugin-styled-components'), { minify: false, ...styledComponentsOptions } ]
                ]
            },
            production: {
                plugins: [
                    [ require('babel-plugin-styled-components'), { minify: true, ...styledComponentsOptions } ]
                ]
            }
        }
    }

}
