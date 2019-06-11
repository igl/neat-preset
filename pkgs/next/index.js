const { PHASE_PRODUCTION_SERVER = null } =
    process.env.NODE_ENV === 'development'
        ? {} // We're never in "production server" phase when in development mode
        : require('./constants')

// load .env files
require('dotenv-load')()

// config getter
module.exports = (neatOptions = {}) => {
    return require('next-env')(neatOptions.env)((phase, args) => {
        return (nextConfig = {}) => (phase, args) => {
            // Config used to run in production.
            if (phase === PHASE_PRODUCTION_SERVER) {
                return {}
            }

            if (typeof nextConfig === 'function') {
                return nextConfig(phase, args)
            }

            return nextConfig
        }
    })
}
