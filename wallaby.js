module.exports = function () {

  return {
    files: ['sum.js'],

    tests: ['__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony'
      }
    },

    testFramework: 'jest'

    // Use bootstrap function
    //setup: function (wallaby) {
    //  wallaby.testFramework.configure({
    //    // https://facebook.github.io/jest/docs/api.html#config-options
    //  });
    //}
  };
};
