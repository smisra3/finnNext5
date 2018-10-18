const webpack = require("webpack");
const dotenv = require("dotenv");
const StringReplacePlugin = require("string-replace-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const minify = require("harp-minify");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Buildify = require("buildify");
const path = require("path");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const {
  ENV_DEVELOPMENT,
  STATIC_FOLDER_PREFIX,
  ENV_PRODUCTION
} = require("../isomorphic/constants");

const { parsed: envVars } = dotenv.config({
  path: path.resolve(
    __dirname,
    `..${path.sep}env${path.sep}${process.env.NODE_ENV || ENV_DEVELOPMENT}.env`
  )
});

const getRegExp = () => {
  const regex = `${STATIC_FOLDER_PREFIX}`;
  return new RegExp(regex, "ig");
};
const metricsKey = process.env.ENV_API_KEY === process.env.PROD_KEY ? "prod" : "dev";

module.exports = withBundleAnalyzer({
  analyzeServer: process.env.NODE_ENV === "production",
  analyzeBrowser: process.env.NODE_ENV === "production",
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: path.join(__dirname, "../../reports/bundleAnalyzer/report-server.html")
    },
    browser: {
      analyzerMode: "static",
      reportFilename: path.join(__dirname, "../../reports/bundleAnalyzer/report-client.html")
    }
  },
  publicRuntimeConfig: {
    metricsKey,
    isCachingEnabled: process.env.CACHE_ENABLED !== "false",
    isProd: process.env.PROD_ENV === "true"
  }
});
