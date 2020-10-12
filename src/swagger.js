const swagger = require('feathers-swagger');

const config = swagger({
  openApiVersion: 3,
  specs: {
    info: {
      title: 'Alkemi Earn KYC Service',
      description:
        'API interfaces to query information for the Alkemi Earn Protocol',
      version: process.env.npm_package_version,
      contact: {
        name: 'Alkemi Network',
        url: 'https://alkemi.network',
        email: 'hello@alkemi.ai'
      }
    },
    servers: [
      {
        url: 'https://' + process.env.HOST,
        description: process.env.NETWORK
      }
    ]
  },

  idType: 'string',
  schemes: ['http'],
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: 'not currently implemented while in staging'
    }
  },
  docsPath: '/',
  // (optional) - The path where the swagger json will be available (independently of request Accept header).
  docsJsonPath: '/swagger.json',
  uiIndex: true
});

module.exports = config;
