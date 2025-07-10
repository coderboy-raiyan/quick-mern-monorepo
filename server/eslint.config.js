// eslint.config.js
import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    // Global ignores
    ignores: ['node_modules', 'dist'],
  },
  // Base configuration for all files
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // Configuration for TypeScript files
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
    },
  },
  // Prettier configuration must be last
  prettierConfig,
)
