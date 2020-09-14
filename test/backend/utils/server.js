require('module-alias/register');
const express = require('express');
const bodyParser = require('body-parser');

let app;
let session;

const createApp = () => {
  app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
      res.json({ error: 'Invalid JSON' });
    } else {
      next();
    }
  });

  app.use(require('@/src/backend/routes')());

  return app;
};

const createSession = () => {
  if (app) {
    session = app.listen(42014); // Needs to listen on an unused port
  }
};

const getApp = () => {
  if (!app) {
    return createApp();
  }

  return app;
};

const getNewApp = () => {
  killSession();
  createApp();
  createSession();

  return app;
};

const killSession = () => {
  if (session) {
    return session.close();
  }
};

module.exports = {
  getApp,
  getNewApp,
  killSession,
};
