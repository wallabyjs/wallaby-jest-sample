module.exports = function () {

  return {
    files: ['sum.js'],

    tests: ['__tests__/*.js'],

    env: {
      type: 'node'
    },

    testFramework: 'jest@0.4.3'

    // Use bootstrap function
    //bootstrap: function (wallaby) {
    //  wallaby.testFramework.configure({
    //    // https://facebook.github.io/jest/docs/api.html#config-options
    //  });
    //}
  };
};