const { PHASE_PRODUCTION_SERVER = null } =
    process.env.NODE_ENV === 'development'
        ? {} // We're never in "production server" phase when in development mode
        : require('./constants')

// load .env files
require('dotenv-load')()

// config getter
module.exports = (options = {}) => {
    const withEnv = require('next-env')(options.env)

    return (nextConfig = {}, composePlugins = {}) => {
        const { nextComposePlugins, phase } = composePlugins

        const nextConfigMethod = (phase, args) => {
            if (typeof nextConfig === 'function') {
                nextConfig = nextConfig(phase, args)
            }

            if (phase === PHASE_PRODUCTION_SERVER) {
                return nextConfig
            }

            return nextConfig
        }

        return withEnv(nextComposePlugins ? nextConfigMethod(phase) : nextConfigMethod)
    }
}
