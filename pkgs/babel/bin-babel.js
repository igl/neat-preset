#!/usr/bin/env node

const path = require('path')
const spawn = require('cross-spawn')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))

const BABEL = path.resolve(__dirname, './node_modules/.bin/babel')
const source = argv._[0]
const otherArgs = argv._.slice(1)
const outDir = argv['out-dir'] || argv.d || 'dist'
const extensions = argv.extensions || argv.x || '.js,.jsx,.ts,.tsx'
const ignore =
    argv.ignore ||
    '"**/node_modules/**",' +
        '"**/*.spec.js","**/*.spec.jsx","**/*.spec.ts","**/*.spec.tsx",' +
        '"**/*.test.js","**/*.test.jsx","**/*.test.ts","**/*.test.tsx",' +
        '"**/*.story.js","**/*.story.jsx","**/*.story.ts","**/*.story.tsx",' +
        '"**/*.stories.js","**/*.stories.jsx","**/*.stories.ts","**/*.stories.tsx"'

const callArgs = [
    source,
    '--out-dir',
    outDir,
    '--extensions',
    extensions,
    '--ignore',
    ignore,
    '--source-maps',
    ...otherArgs,
]

// console.log(`$ ${BABEL} ${callArgs.join(' ')}`)

spawn(BABEL, callArgs, { stdio: 'inherit' }).on('exit', exitCode => {
    process.exit(exitCode || 0)
})
