const dotenvLoad = require('dotenv-load');
dotenvLoad();

const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withEnv = require('next-env')

module.exports = (options = {}) => {

    const opts = {
        images: {},
        fonts: {},
        env: {},
        css: {},
        ...options,
    }

    return (nextConfig) => {
        nextConfig = withCSS({ ...nextConfig, ...opts.css })
        nextConfig = withImages({ ...nextConfig, ...opts.images })
        nextConfig = withFonts({ ...nextConfig, ...opts.fonts })
        nextConfig = withEnv({ ...nextConfig, ...opts.env })

        return nextConfig
    }

}
