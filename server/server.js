
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var http = require('http');
var path = require('path');

// declare routers

var app = express();

app.use(bodyParser.json());
app.use(cors());

var authRoutes = require('./routes/auth.routes');

// define routers
app.use('/auth', authRoutes);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

//module.exports = {app};
