const swaggerJsDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'UnsplashBox API',
    version: '1.0.0',
    description: 'API documentation for UnsplashBox',
    contact: {
      name: 'Ankit Kumar',
      url: 'https://yourwebsite.com',
      email: 'your-email@example.com'
    }
  },
  servers: [
    {
      url: `http://localhost:${process.env.BACKEND_PORT || 3000}`, 
    },
  ],
};

const swaggerOptions = {
  'definition': swaggerDefinition,
  apis: ['./src/routes/*.js'], 
};

// Initialize swagger-jsdoc
const swaggerSpecs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpecs;