module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    'react/prop-types': 'off', // Desativa a verificação de tipos de prop
    'react/react-in-jsx-scope': 'off', // Não necessário no Next.js
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Aviso para variáveis não usadas
    'react/jsx-uses-react': 'off', // Desativa verificação de uso de React, necessário apenas em versões antigas
    'react/jsx-uses-vars': 'error',
    'import/no-unresolved': 'error',
    // 'testing-library/no-node-access': ['error', { allowContainerFirstChild: true }],
  },
}
