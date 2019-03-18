require('dotenv-load')()

const withEnv = require('next-env')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')

const withGraphqlLanguageServiceInterfaceFix = (nextConfig = {}) => ({
    ...nextConfig,
    webpack (config, options) {
        const webpack = require('webpack')

        config.module.rules.unshift(
            {
                'test': /\.(flow)$/,
                'use': 'ignore-loader',
            }
        )

        config.plugins.unshift(new webpack.ContextReplacementPlugin(
            /graphql-language-service-interface[\\/]dist$/,
            new RegExp(`^\\./.*\\.js$`)
        ))

        if (typeof nextConfig.webpack === 'function') {
            return nextConfig.webpack(config, options)
        }

        return config
    },
})

module.exports = (options = {}) => (nextConfig = {}) => (phase, args) => {
    nextConfig = withEnv(options.env)(nextConfig)(phase, args)
    nextConfig = withGraphqlLanguageServiceInterfaceFix(nextConfig)
    nextConfig = withFonts({ ...nextConfig, ...options.fonts })
    nextConfig = withImages({ ...nextConfig, ...options.images })
    nextConfig = withCSS({ ...nextConfig, ...options.css })

    if (typeof nextConfig === 'function') {
        nextConfig = nextConfig(phase, args)
    }

    return nextConfig
}
