module.exports = {
    preset: 'react',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: 'jsdom',
    "transformIgnorePatterns": [
        "/node_modules/(?!(react-dnd-test-utils)/)"
    ]
};
