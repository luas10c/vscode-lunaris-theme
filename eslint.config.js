import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'

import ts from 'typescript-eslint'

import prettier from 'eslint-plugin-prettier'

import jest from 'eslint-plugin-jest'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', 'coverage']),
  ts.config(js.configs.recommended, ts.configs.recommended, [
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
    },
    {
      name: 'jest/recommended',
      files: ['**/*.{spec|test}.ts'],
      languageOptions: {
        globals: {
          ...globals.jest
        }
      },
      ...jest.configs['flat/recommended']
    }
  ])
])
