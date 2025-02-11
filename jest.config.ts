export default {
  "transform": {
    "\\.ts$": [
      "ts-jest",
      {
        "useESM": true
      }
    ],
    "keystone-6-core-fields\\.cjs\\.js$": [
        "ts-jest",
        {
            "useESM": false,
            "tsconfig": "tsconfig.test.json"
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

