module.exports = {
    rootDir: '.',
    modulePaths: ['<rootDir>'],
    testMatch: ['**/?(*.)(spec|test).js'],
    modulePathIgnorePatterns: [
        '<rootDir>/(db|dist|tmp)/.',
        '<rootDir>/node_modules/(?!(fbjs/lib/|react/lib/|fbjs-scripts/jest))',
        '<rootDir>/node_modules/(?!(@babel/runtime))',
    ],
    transform: {
        '^.+\\.(js|ts)x?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['jest-chain', 'jest-extended'],
    collectCoverage: true,
    coverageDirectory: './dist/coverage/',
    coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/jest/'],
}
