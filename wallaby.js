module.exports = function () {

  return {
    files: ['sum.ts'],

    tests: ['__tests__/*.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};
