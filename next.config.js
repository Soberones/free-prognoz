const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = {
  /* config options here */
  pwa: {
    dest: "public",
    runtimeCaching,
  },
};
