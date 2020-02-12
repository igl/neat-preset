#!/usr/bin/env node

const path = require('path')
const spawn = require('cross-spawn')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))

const BABELNODE = path.resolve(__dirname, './node_modules/.bin/babel-node')
const scriptFile = argv._[0]
const otherArgs = argv._.slice(1)
const extensions = argv.extensions || argv.x || `.js,.jsx,.ts,.tsx`

const callArgs = [scriptFile, '--extensions', extensions, ...otherArgs]

console.log(`$ ${BABELNODE} ${callArgs.join(' ')}`)

spawn(BABELNODE, callArgs, { stdio: 'inherit' }).on('exit', exitCode => {
    process.exit(exitCode || 0)
})
