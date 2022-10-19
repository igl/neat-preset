#!/usr/bin/env node

const path = require('path')
const spawn = require('cross-spawn')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))

const BABEL = path.resolve(__dirname, './node_modules/.bin/babel')
const TSC = 'tsc'

const source = argv._[0]
const otherArgs = argv._.slice(1)
const outDir = argv['out-dir'] || argv.d || 'dist'
const extensions = argv.extensions || argv.x || '.js,.jsx,.ts,.tsx'
const declarations = Boolean(argv.declarations)
const help = Boolean(argv.help)
const ignore =
    argv.ignore ||
    '"**/node_modules/**",' +
        '"**/*.spec.js","**/*.spec.jsx","**/*.spec.ts","**/*.spec.tsx",' +
        '"**/*.test.js","**/*.test.jsx","**/*.test.ts","**/*.test.tsx",' +
        '"**/*.story.js","**/*.story.jsx","**/*.story.ts","**/*.story.tsx",' +
        '"**/*.stories.js","**/*.stories.jsx","**/*.stories.ts","**/*.stories.tsx"'

const babelCallArgs = [
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

const tscCallArgs = ['--declaration', '--emitDeclarationOnly', '--outDir', outDir]

// console.log(`$ ${BABEL} ${babelCallArgs.join(' ')}`)
let collectedExitCodes = []

function taskDone(code) {
    // after collecting 2 exit codes we quit with the highest code
    if (collectedExitCodes.push(code) === 2) {
        process.exit(Math.max(...collectedExitCodes))
    }
}

if (help) {
    spawn(BABEL, ['--help'], { stdio: 'inherit' }).on('exit', taskDone)
} else {
    spawn(BABEL, babelCallArgs, { stdio: 'inherit' }).on('exit', taskDone)

    // emit declaration files too
    if (declarations) {
        spawn(TSC, tscCallArgs, { stdio: 'inherit' }).on('exit', taskDone)
    } else {
        collectedExitCodes.push(0)
    }
}
