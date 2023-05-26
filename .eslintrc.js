module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	globals: {
		JSX: true,
	},
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-var-requires': 0,
		eqeqeq: 'error',
		'no-console': 'warn',
		'no-undef': 'off',
		'prettier/prettier': 'error',
		'@typescript-eslint/no-explicit-any': ['off'],
		'react/prop-types': 'off',
	},
};
