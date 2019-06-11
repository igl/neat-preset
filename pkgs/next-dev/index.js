const withNeat = require('@neat-preset/next')

module.exports = (neatOptions = {}) =>
    withNeat(neatOptions)((phase, { defaultConfig }) => {
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
