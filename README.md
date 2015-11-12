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

    testFramework: 'jest'
  };
};
```

**Please note that wallaby.js is using its own cache to run your tests from, not the local project folder, so you need to include all files (except node modules) that your tests need, for example `__mocks__/*.*`, etc.** 

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

    testFramework: 'jest',

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
