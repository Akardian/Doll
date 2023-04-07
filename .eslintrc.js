module.exports = {
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
    ],
    plugins: [
        '@typescript-eslint'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    rules: {
        //Eslint Rules
        'indent': ['error', 4],
        // Vue Rules
        'vue/component-tags-order': ['error', {
            'order': ['style', 'template', 'script' ]
        }],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/html-quotes": [ 
            "error", "single", { "avoidEscape": true     }
        ],
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always"
        }],
    },
    root: true
}