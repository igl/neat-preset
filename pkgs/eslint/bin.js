#!/usr/bin/env node

const path = require('path')
const spawn = require('cross-spawn')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))

const ESLINT = path.resolve(__dirname, './node_modules/.bin/eslint')
const target = argv._[0]
const otherArgs = argv._.slice(1)
const maxWarnings = argv['max-warnings'] || '10'
const extensions = argv['ext'] || '.js,.mjs,.jsx,.ts,.tsx'

const callArgs = [
    ...otherArgs,
    '--ext',
    `${extensions}`,
    '--max-warnings',
    `${maxWarnings}`,
    '--resolve-plugins-relative-to',
    __dirname,
    target,
]

// console.log(`>>> ${ESLINT} ${callArgs.join(' ')}`)

spawn(ESLINT, callArgs, { stdio: 'inherit' }).on('exit', exitCode => {
    process.exit(exitCode || 0)
})
