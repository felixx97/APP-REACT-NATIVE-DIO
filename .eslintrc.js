module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parse": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        "react-hooks",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [
        "warn",
        {
          "extensions": [".jsx", ".js"],
        },
      ],
      "import/preter-default-export": "off",
      "no-param-ressign": "off"
    }
};
