const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

// load .env files
dotenvLoad()

const { PHASE_PRODUCTION_SERVER = null } =
    process.env.NODE_ENV === 'development'
        ? {} // We're never in "production server" phase when in development mode
        : !process.env.NOW_REGION
        ? require('next/constants') // Get values from `next` package when building locally
        : require('next-server/constants') // Get values from `next-server` package when building on now v2

module.exports = (neatOptions = {}) =>
    nextEnv(neatOptions.env)((phase, { defaultConfig }) => {
        // Config used to run in production.
        if (phase === PHASE_PRODUCTION_SERVER) {
            return {}
        }

        // dev only
        const withImages = require('next-images')
        const withFonts = require('next-fonts')
        const withCSS = require('@zeit/next-css')
        const withTypescript = require('@zeit/next-typescript')

        const withGraphqlLanguageServiceInterfaceFix = (nextConfig = {}) => ({
            ...nextConfig,
            webpack(config, options) {
                const webpack = require('webpack')

                config.module.rules.unshift({
                    test: /\.(flow)$/,
                    use: 'ignore-loader',
                })

                config.plugins.unshift(
                    new webpack.ContextReplacementPlugin(
                        /graphql-language-service-interface[\\/]dist$/,
                        new RegExp(`^\\./.*\\.js$`)
                    )
                )

                if (typeof nextConfig.webpack === 'function') {
                    return nextConfig.webpack(config, options)
                }

                return config
            },
        })

        return (nextConfig = {}) => (phase, args) => {
            nextConfig = withGraphqlLanguageServiceInterfaceFix(nextConfig)
            nextConfig = withFonts({ ...nextConfig, ...neatOptions.fonts })
            nextConfig = withImages({ ...nextConfig, ...neatOptions.images })
            nextConfig = withCSS({ ...nextConfig, ...neatOptions.css })
            nextConfig = withTypescript({ ...nextConfig, ...neatOptions.typescript })

            if (typeof nextConfig === 'function') {
                return nextConfig(phase, args)
            }

            return nextConfig
        }
    })
