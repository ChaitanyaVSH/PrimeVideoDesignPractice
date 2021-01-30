const {defaults} = require('jest-config');

module.exports = {
    clearMocks: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!**/node_modules/**",
    ],
    setupFiles: ["<rootDir>/enzyme.config.js"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    testPathIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy",
      },
};

// Useful articles for setting up jest for react projects.
// https://stackoverflow.com/questions/57793527/what-are-obsolete-snapshots-and-snapshot-files
// https://github.com/enzymejs/enzyme/issues/1190
// https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined
// https://stackoverflow.com/questions/56952728/jest-tests-on-react-components-unexpected-token
// https://stackoverflow.com/questions/51994111/jest-encountered-an-unexpected-token
// https://stackoverflow.com/questions/59878153/how-to-use-jest-config-js-with-create-react-app
// https://stackoverflow.com/questions/30027494/how-to-write-a-jest-configuration-file
