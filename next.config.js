const data = require("./lib/data");

// const isProd = process.env.NODE_ENV === "production";
// const host = "sklipper.github.com";
// const host = "https://cdn.statically.io/gh/sklipper/sklipper.github.io/gh-pages"

module.exports = {
  compress: true,
  poweredByHeader: true,
  generateEtags: true,
  cleanDistDir: true,
  env: {
    SITE_NAME: data.site.name,
    SITE_URL: process.env.SITE_URL + "/api",
    NEXT_PUBLIC_MYNAME: "sklipper",
  },
  // assetPrefix: isProd ? `${host}/` : "",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/posts/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};
