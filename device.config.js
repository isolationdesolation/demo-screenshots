const { devices } = require("playwright");

const iPhone = devices["iPhone 6"];
module.exports = {
  desktop: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1920,
      height: 1080,
    },
    recordVideo: {
      dir: "videos/",
    },
  },
  mvs: {
    ignoreHTTPSErrors: true,
    recordVideo: {
      dir: "videos/",
    },
    ...iPhone,
    viewport: {
      width: 376,
      height: 668,
    },
    isMobile: false,
  },
};
