module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
        "substackcdn.com",
        "assets.tina.io"
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};
