require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express'); 
const swaggerSpecs = require('./src/config/swagger');

const PORT = process.env.BACKEND_PORT || 3000;

const app = require('./app');  

// Parse JSON body data
app.use(express.json());

// Setup Swagger UI
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


app.get("/", (req, res) => {
    res.send("API Testing....");
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api/docs`);
  });