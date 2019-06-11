const { PHASE_PRODUCTION_SERVER } = require('@neat-preset/next/contants')

module.exports = (phase, { defaultConfig }) => {
    // Config used to run in production.
    if (phase === PHASE_PRODUCTION_SERVER) {
        return require('@neat-preset/next')
    }

    // Config used to run in 'dev' and when building
    return require('@neat-preset/next-dev')
}
