'use strict';

const request = require('request');

let Censei = {}, server_path;

Censei.server_path = "";

Censei.isThisSafe = ({ image, text }) => {
  request.post({
    url: `${Censei.server_path}/api/V1/clarifai/predictImage`
  }, function (err, r, body) {
    // do handling here
    console.log("Done!!")
  }).form({file: image.toString('base64')})
};

module.exports = ({ server_path }) => {
  Censei.server_path = server_path;
  return Censei;
};

module.exports.Censei;