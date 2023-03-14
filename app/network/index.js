const express = require('express');
const nufi = require('./nufi.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/nufi', nufi);

}

module.exports = routerApi;
