module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/locations/brussels": {
        page: "/locations/[location]",
        query: { location: "brussels" },
      },
      "/locations/paris-canal-st-martin": {
        page: "/locations/[location]",
        query: { location: "paris-canal-st-martin" },
      },
      "/locations/paris-sentier": {
        page: "/locations/[location]",
        query: { location: "paris-sentier" },
      },
      "/locations/paris-south-pigalle": {
        page: "/locations/[location]",
        query: { location: "paris-south-pigalle" },
      },
    };
  },
};
