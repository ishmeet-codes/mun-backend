const express = require('express');
const bodyParser = require('body-parser');
const committeesRoutes = require('./routes/committees');
const schoolsRoutes = require('./routes/schools');
const individualsRoutes = require('./routes/individuals');

const app = express();

app.use(bodyParser.json());
app.use('/api/committees', committeesRoutes);
app.use('/api/schools', schoolsRoutes);
app.use('/api/individuals', individualsRoutes);

module.exports = app;
