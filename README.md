Testing with wallaby.js and Jest
==================================

![jest](https://cloud.githubusercontent.com/assets/979966/7604375/13921a76-f985-11e4-9820-c8a5f2d26858.gif)

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

## Jest `scriptPreprocessor`

If you are using `scriptPreprocessor` for some source files that you'd like to see wallaby coverage for, you'll need to use [wallaby preprocessor](https://github.com/wallabyjs/public#preprocessors-setting) or [wallaby compiler](https://github.com/wallabyjs/public#compilers-setting) instead.
