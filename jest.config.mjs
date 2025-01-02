/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */

const config = {
  coverageProvider: "v8",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Para TypeScript
    "^.+\\.jsx?$": "babel-jest" // Para JavaScript
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

export default config;
