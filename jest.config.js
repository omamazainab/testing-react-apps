const path = require("path");

module.exports = {
    testEnviroment : "jest-enviroment-json",
    setupFilesAfterEnv : [
        '@testing-library/jest-dom/extend-expect',
        path.join(__dirname,"src/test/setup"),
    ],
    resetMocks : true,
    moduleDirectories : [
        "node_modules", path.join(__dirname,"src")
    ],
    watchPlugins : [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
        "jest-watch-select-projects",
    ]
}