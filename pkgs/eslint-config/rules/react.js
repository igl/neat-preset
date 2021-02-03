module.exports = {
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-curly-spacing': ['warn', 'never', { spacing: { objectLiterals: 'never' } }],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-indent-props': 0,
    'react/jsx-indent': 0,
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-pascal-case': ['warn', { allowAllCaps: true }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'warn',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prop-types': 0,
    'react/sort-comp': 'warn',
    'jsx-a11y/anchor-is-valid': [
        'error',
        {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
        },
    ],
}
