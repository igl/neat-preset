module.exports = {
    modulePathIgnorePatterns: [
        '<rootDir>/(db|dist|build|release|tmp|temp)/.',
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
    globalSetup: __dirname + '/timezone.setup.js',
}
