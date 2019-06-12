const { PHASE_PRODUCTION_SERVER = null } =
    process.env.NODE_ENV === 'development'
        ? {} // We're never in "production server" phase when in development mode
        : require('@neat-preset/next/constants')

module.exports = (neatOptions = {}) => {
    const withNeat = require('@neat-preset/next')(neatOptions)

    return (nextConfig = {}, composePlugins = {}) => {
        const { nextComposePlugins, phase } = composePlugins

        const nextConfigMethod = (phase, args) => {
            if (typeof nextConfig === 'function') {
                nextConfig = nextConfig(phase, args)
            }

            if (phase === PHASE_PRODUCTION_SERVER) {
                return nextConfig
            }

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

            nextConfig = withGraphqlLanguageServiceInterfaceFix(nextConfig)
            nextConfig = withFonts({ ...nextConfig, ...neatOptions.fonts })
            nextConfig = withImages({ ...nextConfig, ...neatOptions.images })
            nextConfig = withCSS({ ...nextConfig, ...neatOptions.css })
            nextConfig = withTypescript({ ...nextConfig, ...neatOptions.typescript })

            return nextConfig
        }

        return withNeat(nextComposePlugins ? nextConfigMethod(phase) : nextConfigMethod)
    }
}
