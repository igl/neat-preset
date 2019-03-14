const dotenvLoad = require('dotenv-load')
dotenvLoad()

const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withEnv = require('next-env')

const merge = pluginDefs => nextConfig =>
    pluginDefs.reduce(
        (config, [ plugin, options ]) => plugin({ config, ...options }),
        nextConfig || {}
    )

module.exports = (options = {}) => {
    const opts = {
        images: {},
        fonts: {},
        env: {},
        css: {},
        ...options,
    }

    return merge([
        [ withImages, opts.images ],
        [ withFonts, opts.fonts ],
        [ withEnv, opts.env ],
        [ withCSS, opts.css ],
    ])
}
