const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
packages.push(path.join(__dirname, "../../packages/components"));
packages.push(path.join(__dirname, "../../packages/pages"));
packages.push(path.join(__dirname, "../../packages/types"));
packages.push(path.join(__dirname, "../../packages/i18n"));
packages.push(path.join(__dirname, "../../packages/hooks"));
packages.push(path.join(__dirname, "../../packages/redux-store"));
packages.push(path.join(__dirname, "../../packages/services"));
packages.push(path.join(__dirname, "../../packages/helpers"));

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve("dist_staging");
      console.log({ env, paths });
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
};
