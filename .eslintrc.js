module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		'standard',
		'plugin:plugin-import/recommended',
		'plugin:plugin-node/recommended',
		'plugin:plugin-promise/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 13,
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
};
