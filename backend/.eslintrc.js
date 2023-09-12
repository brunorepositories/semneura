module.exports = {
    parser: '@typescript-eslin/parser',
    "env": {
        "browser": true,
        "es2021": true
    },
    plugins: ['typescript-eslin'],
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "standard-with-typescript"
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
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
