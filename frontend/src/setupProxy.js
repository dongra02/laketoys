const { createProxyMiddleware } = require('http-proxy-middleware')
const { model } = require('mongoose')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', { target: 'http://localhost:8000' }))
}