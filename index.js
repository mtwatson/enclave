const cypress = require('cypress');

cypress.run({
  spec: './cypress/integration/examples/actions.spec.js',
  reporter: 'junit',
  browser: 'chrome',
  config: {
    baseUrl: 'http://localhost:8080',
    video: true,
  },
  env: {
    login_url: '/login',
    products_url: '/products',
  },
})
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.error(err);
    });
