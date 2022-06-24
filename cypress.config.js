const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  env: {
    'cypress-react-selector': {
      root: '#root',
    },
  },
  video: false,
  component: {
    component: {
      specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    },
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
});
