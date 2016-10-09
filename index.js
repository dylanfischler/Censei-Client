'use strict';

const request = require('request');

let Censei = {}, server_path;

Censei.server_path = "";

Censei.isThisSafe = ({ image, text }) => {
  return new Promise((resolve, reject) => {
    request.post({
      url: `${Censei.server_path}/api/V1/verify`
    }, function (err, r, body) {
      if(err) reject(err);
      else resolve(body);
    }).form({
      file: image.toString('base64'),
      text: text
    })
  });
};

module.exports = ({ server_path }) => {
  Censei.server_path = server_path;
  return Censei;
};

module.exports.Censei;