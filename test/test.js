'use strict';

const request = require('request');
const censeiClient = require('../index');
const fs = require('fs');

const censei = censeiClient({ server_path: 'http://localhost:8080'});

fs.readFile('./test/test_censored.png', (err, data) => {
  if (err) throw err;

  censei.isThisSafe({ 
    image: data, 
    text: "Adrienne Briana Moore STD carrier (Herpesvirus) a sex addict who is a compulsive liar, Cheater and Thief! Beware Of This Women. She Live In Southern Pines, NC" 
  }).then(
    (result) => {
      console.log("result", result);
    },
    (error) => {
      console.log("error", error);
    }
  )
});

// let app = express();



