# 🔧 ESLint Config

Our default eslint configuration for all projects.

Includes plugins compilation for the following environments:

-   react (`@neat-preset/eslint/react`)
-   node (`@neat-preset/eslint/node`)
-   nextjs (`@neat-preset/eslint/nextjs``)
-   & typescript too (`@neat-preset/eslint/typescript`)

# Usage

1. Add task dependency and config in your `package.json`:

```json
  "scripts": {
    "lint": "eslint --ext .js,.jsx,.ts,.tsx --max-warnings 20 ./src"
  }
  "devDependencies": {
    "@neat-preset/eslint": "0.0.1"
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "@neat-preset/eslint/node",
      "@neat-preset/eslint/ts"
    ]
  },
```

2. Run `yarn lint`
