module.exports = {
    // the rules by which values are coerced are complicated and unmemorable
    // `!=` and `==` is only allowed to make checks against null and undefined.
    // `x == null` is true when x is null or undefined but false when it's `false` or `0`
    eqeqeq: ['error', 'smart'],

    // async functions which have no await expression could still return a Promise and
    // we can "mark" them as async.
    // Nothing breaks or runs slower when doing this.
    'require-await': 0,

    // prepend unused identifier with "_" to have it ignored.
    // falling back to either `@typescript-eslint/no-unused-vars` or `react/no-unused-vars`
    'no-unused-vars': 0,
    'no-use-before-define': 0,

    // ignore until we have proper logger
    'no-console': 0,

    // this makes code ugly and we prefer immutable objects
    'require-atomic-updates': 0,

    // you want immutable values - not immutable bindings!
    'prefer-const': 0,

    // Enforces return statements in callbacks of array’s methods
    'array-callback-return': 'error',
}
