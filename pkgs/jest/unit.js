module.exports = {
    ...require('./index'),
    displayName: 'unit',
    rootDir: '.',
    testMatch: ['**/?(*.)(spec).(js|ts)'],
    modulePaths: ['<rootDir>/src'],
}
