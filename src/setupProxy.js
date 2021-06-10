const streamify = require('stream-array');
const  {createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api',"/auth/google"],
    createProxyMiddleware({
       target: 'https://scrive.com/',
       changeOrigin: true
    })
  );
};


/*
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));
app.listen(3000);*/
