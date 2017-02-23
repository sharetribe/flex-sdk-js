const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const FILE = './condor-airplane.jpg'

const stream = fs.createReadStream(FILE);

const data = new FormData();

data.append('image', stream);

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InVzZXIiLCJleHAiOjE0ODc4NjU1NTIsInVzZXItaWQiOiIzYzA3M2ZhZS02MTcyLTRlNzUtOGI5Mi1mNTYwZDU4Y2Q0N2MifQ.AqYrq5CxSCITECuPKpjUemlDgc5FcwR94kxCvTDFWe4';

data.getLength(function(err, length) {
  const multipartHeaders = data.getHeaders();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Length': length,
  };

  var config = {
    baseURL: 'http://localhost:8088/v1/api',
    headers: Object.assign({}, headers, multipartHeaders),
  };

  axios.post('/listings/upload_image', data, config)
       .then(function (res) {
         console.log("Success.");
         console.log(res);
       })
       .catch(function (err) {
         console.error("Error.");
         console.error(err)
       });
});
