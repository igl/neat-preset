#!/usr/bin/env node

const path = require('path')
const spawn = require('cross-spawn')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))

const SWC = path.resolve(__dirname, './node_modules/.bin/swc')
const TSC = path.resolve(__dirname, './node_modules/.bin/ttsc')

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

const swcCallArgs = [
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

// console.log(`$ ${SWC} ${swcCallArgs.join(' ')}`)
let collectedExitCodes = []

function taskDone(code) {
    // after collecting 2 exit codes we quit with the highest code
    if (collectedExitCodes.push(code) === 2) {
        process.exit(Math.max(...collectedExitCodes))
    }
}

if (help) {
    spawn(SWC, ['--help'], { stdio: 'inherit' }).on('exit', taskDone)
} else {
    spawn(SWC, swcCallArgs, { stdio: 'inherit' }).on('exit', taskDone)

    // emit declaration files too
    if (declarations) {
        spawn(TSC, tscCallArgs, { stdio: 'inherit' }).on('exit', taskDone)
    } else {
        collectedExitCodes.push(0)
    }
}