const express = require('express');
const app = express();
const port = 5000;

// Import routes
const routes = require('../21110829/routes/route');

// Initialize mygroup
const mygroup = [
  { id: '21110829', name: 'Nguyen Kim Hong' }
];

// Middleware
app.use(express.json());

// Log function
const log = (req) => {
  const { method, url } = req;
  console.log(`[${method}] ${url}`);
};

// Routes
app.use('/', (req, res, next) => {
  log(req);
  next();
});
app.use('/', routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});