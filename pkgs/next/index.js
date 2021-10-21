const { PHASE_PRODUCTION_SERVER = null } =
    process.env.NODE_ENV === 'development'
        ? {} // We're never in "production server" phase when in development mode
        : require('./constants')

// config getter
module.exports = (options = {}) => {
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

        return nextComposePlugins ? nextConfigMethod(phase) : nextConfigMethod
    }
}
