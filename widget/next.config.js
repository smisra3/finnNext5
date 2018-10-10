module.exports = {
  webpack: (config, { dev, buildId, isServer }) => {
    config.module.rules.push({
      test: [/\.css$/],
      use: ["babel-loader", "raw-loader"]
    });

    config.module.rules.push({
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        presets: [["es2015", { modules: false }]]
      }
    });

    return config;
  }
};
