const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  reactStrictMode: true,

  webpack: (config, { isServer, buildId, dev, defaultLoaders, webpack }) => {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: isServer ? "8080" : "8081",
          openAnalyzer: true,
        })
      );
    }
    return config;
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
