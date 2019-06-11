exports.presetEnv = (options = {}, target) => {
    const defaultConfig = {
        useBuiltIns: 'usage',
        corejs: '2',
        targets: (
            target === 'node'
                ? { node: 'current' }
                : '> 1%, not dead'
        )
    }

    const userConfig =
        options['@babel/preset-env']
        || options['preset-env']
        || options['presetEnv']
        || {}

    return {
        ...defaultConfig,
        ...userConfig
    }
}

exports.transformRuntime = (options = {}, target) => {
    const defaultConfig = {
        corejs: 2,
        helpers: true,
        regenerator: true,
        useESModules: false
    }

    const userConfig =
        options['@babel/plugin-transform-runtime']
        || options['transform-runtime']
        || options['transformRuntime']
        || {}

    return {
        ...defaultConfig,
        ...userConfig
    }
}

exports.transformDefine = (options = {}, target) => {
    const defaultConfig = {
        __DEV__: process.env.NODE_ENV !== 'production'
    }

    const userConfig =
        options['babel-plugin-transform-define']
        || options['babelPluginTransformDefine']
        || options['transform-define']
        || options['transformDefine']
        || {}

    return {
        ...defaultConfig,
        ...userConfig
    }
}

exports.optionalChaining = (options = {}, target) => {
    const defaultConfig = {
        loose: true
    }

    const userConfig =
        options['@babel/plugin-proposal-optional-chaining']
        || options['optional-chaining']
        || options['optionalChaining']
        || {}

    return {
        ...defaultConfig,
        ...userConfig
    }
}

exports.moduleResolver = (options = {}, target) => {
    const defaultConfig = {
        root: './'
    }

    const userConfig =
        options['babel-plugin-module-resolver']
        || options['babelPluginModuleResolver']
        || options['module-resolver']
        || options['moduleResolver']
        || {}


    // interpret a string-only configuration as 'root' key value
    if (typeof userConfig === 'string' && userConfig /* no empty string */) {
        return {
            root: userConfig.split(';')
        }
    }

    return {
        ...defaultConfig,
        ...userConfig
    }
}

exports.typescript = (options = {}, target) => {
    const defaultConfig = {
        isTSX: true,
    }

    const userConfig =
        options['@babel/preset-typescript']
        || options['preset-typescript']
        || options['presetTypescript']
        || {}

    return {
        ...defaultConfig,
        ...userConfig
    }
}

exports.styledComponents = (options = {}, target) => {
    const defaultConfig = {
        ssr: true,
        displayName: true,
        minify: process.env.NODE_ENV === 'production'
    }

    const userConfig =
        options['babel-plugin-styled-components']
        || options['babelPluginStyledComponents']
        || options['styled-components']
        || options['styledComponents']
        || {}

    return {
        ...defaultConfig,
        ...userConfig
    }
}
