module.exports = {
    ...require('./index'),
    displayName: 'integration',
    rootDir: './tests',
    testMatch: ['**/?(*.)(test).(js|ts)'],
    collectCoverage: false, // we don't import source files where coverage could be collected in integrations tests
}
