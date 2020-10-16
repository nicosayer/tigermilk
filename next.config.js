module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/locations/brussels": { page: "/locations/[location].js", },
      "/locations/paris-canal-st-martin": { page: "/locations/[location].js", },
      "/locations/paris-sentier": { page: "/locations/[location].js", },
      "/locations/paris-south-pigalle": { page: "/locations/[location].js", },
    };
  },
};
