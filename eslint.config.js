import globals from 'globals'

import js from '@eslint/js'

import ts from 'typescript-eslint'

import prettier from 'eslint-plugin-prettier'

/** @type{import('eslint').Linter.Config[]} */
const config = ts.config(js.configs.recommended, ts.configs.recommended, [
  {
    name: 'nodejs/recommended',
    languageOptions: {
      globals: {
        ...globals.es2022,
        ...globals.node
      }
    }
  },
  {
    name: 'prettier/recommended',
    plugins: {
      prettier
    },
    rules: {
      ...prettier.configs.recommended.rules
    }
  }
])

export default config
