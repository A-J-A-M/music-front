const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://music-back-production.up.railway.app', // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};






