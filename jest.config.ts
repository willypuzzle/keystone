export default {
  "transform": {
    "\\.ts$": [
      "ts-jest",
      {
        "useESM": true
      }
    ]
  },
  "moduleNameMapper": {
    "graphql-upload/(.*)": "graphql-upload/$1",
    "decimal.js": "decimal.js",
    "(.+)\\.js": "$1",
  },
  "extensionsToTreatAsEsm": [
    ".ts"
  ],
  testEnvironment: "node",
  verbose: true,
  module: 'preserve',
};

