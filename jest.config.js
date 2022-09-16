module.exports = {
    roots: [
        "<rootDir>/src"
    ],
    moduleNameMapper: {
        "@components/(.*)": "<rootDir>//src/components/$1",
        "@utils/(.*)": "<rootDir>/src/utils/$1"
    }
};