const path = require("path");
const withPWA = require("next-pwa");

module.exports = {
  reactStrictMode: false,
  env: {
    GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["endondemevacuno.s3.us-east-2.amazonaws.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  ...withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  }),
};
