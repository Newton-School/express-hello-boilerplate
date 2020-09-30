const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    // return string "Hello, World!"
    // with statusCode 200 OK
});

app.get('/url-example', (req, res) => {

    // return json response with
    // 'message': 'response from json'
    // with statusCode 200 OK
})

module.exports = app;