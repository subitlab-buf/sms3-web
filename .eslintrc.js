module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		//"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"react-app",
		"react-app/jest",
		"plugin:react/jsx-runtime"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"warn",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"@typescript-eslint/no-unused-vars":["error"],
		"jsx-a11y/alt-text":0
	}
};
