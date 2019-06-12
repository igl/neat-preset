const nextConfig = {
    target: 'serverless',
    distDir: '../.next',
}

const { PHASE_PRODUCTION_SERVER } = require('@neat-preset/next/constants')

module.exports = (phase, _args) => {
    // Config used to run in production.
    if (phase === PHASE_PRODUCTION_SERVER) {
        return require('@neat-preset/next')()(nextConfig)
    }

    // Config used to run in 'dev' and when building
    return require('@neat-preset/next-dev')()(nextConfig)
}
