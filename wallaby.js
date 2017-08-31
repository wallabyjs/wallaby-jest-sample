module.exports = function (wallaby) {
  return {
    name: "galaxy",
    files: [
      { pattern: "node_modules/jquery/dist/jquery.js", instrument: false },
      { pattern: "node_modules/babel-polyfill/dist/polyfill.js", instrument: false },
      { pattern: "packages/ui-core/src/**/*.js", load: false },
      { pattern: "packages/javascript-core/src/**/*.js", load: false },
      { pattern: "packages/context/src/**/*.js", load: false },
      { pattern: "packages/testHelpers/src/**/*.js", load: false },
      { pattern: "packages/galaxy/src/**/*.js", load: false, instrument: true },
      { pattern: "packages/galaxy/tests/data/*.json", load: false },
      { pattern: "packages/galaxy/tests/preProcessors/*.js", load: false },
      { pattern: "packages/galaxy/tests/mocks/*.js", load: false },
      { pattern: "packages/galaxy/tests/*.js", load: false },
      { pattern: "packages/galaxy/tests/**/*.snap", load: false, instrument: false },
      { pattern: "packages/galaxy/src/**/*.less", load: false, instrument: false },
    ],
    tests: [
      { pattern: "packages/galaxy/tests/specs/**/*.unit.js" },
    ],
    filesWithNoCoverageCalculated: [
      "!packages/galaxy/**/*.js",
    ],
    env: {
      type: "node",
      runner: "node",
    },
    testFramework: "jest",
    compilers: {
      "**/*.js": wallaby.compilers.babel({ babel: require("babel-core") }),
    },
    debug: true,
    setup: (target) => {
      target.testFramework.configure({
        moduleNameMapper: {
          ".*.(less|css)$": require("path").join(target.localProjectDir, "/packages/galaxy/tests/preProcessors/jest.js"),
        },
      });
    },
  };
};