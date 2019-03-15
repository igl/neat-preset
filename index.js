require('dotenv-load')()

const withEnv = require('next-env')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')

module.exports = (options = {}) => (nextConfig = {}) => {
    nextConfig = withEnv({ ...nextConfig, ...options.env })
    nextConfig = withFonts({ ...nextConfig, ...options.fonts })
    nextConfig = withImages({ ...nextConfig, ...options.images })
    nextConfig = withCSS({ ...nextConfig, ...options.css })
    return nextConfig
}
