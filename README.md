Testing with wallaby.js and Jest
==================================

## Install Jest

`npm install`

## Configure wallaby.js

Create [wallaby.js configuration file](https://github.com/wallabyjs/public#configuration-file-format).

```javascript
module.exports = function () {

  return {
    files: ['sum.js'],

    tests: ['__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest@0.4.3'
  };
};
```

## Configure Jest

If you have some Jest config, pass the config object to `configure` function of the test framework in wallaby [`bootstrap` function](https://github.com/wallabyjs/public#bootstrap-setting).

```javascript
module.exports = function () {

  return {
    files: ['sum.js'],

    tests: ['__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest@0.4.3',

    bootstrap: function (wallaby) {
      wallaby.testFramework.configure({
        // https://facebook.github.io/jest/docs/api.html#config-options
      });
    }
  };
};
```