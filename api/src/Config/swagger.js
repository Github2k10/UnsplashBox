const swaggerJsDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API with Swagger',
    version: '1.0.0',
    description: 'A simple CRUD API application with Swagger documentation',
    contact: {
      name: 'Your Name',
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

// Options for the swagger docs
const swaggerOptions = {
  'definition': swaggerDefinition,
  apis: ['./src/routes/*.js'], // Adjust the path as per your project structure
};

// Initialize swagger-jsdoc
const swaggerSpecs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpecs;