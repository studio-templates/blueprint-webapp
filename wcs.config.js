module.exports = {
    simulationGlobalSetup: "./_wcs/simulation-global-setup.ts",
    newComponent: {
      componentsPath: "./src/components",
      templatesPath: "./src/component-templates",
    },
    sassCompilation: {
      modules: {
        include: ["**/*.module.scss"],
      },
    },
    cssCompilation: {
      cssModulesExt: ['.module.scss']
    }
};