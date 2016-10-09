'use strict';

const request = require('request');
const censeiClient = require('../index');
const fs = require('fs');

const censei = censeiClient({ server_path: 'http://localhost:8080'});

fs.readFile('./test/dog.jpg', (err, data) => {
  if (err) throw err;

  censei.isThisSafe({ image: data, text: "" });
});

// let app = express();



