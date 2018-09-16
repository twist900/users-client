const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
var proxy = require('http-proxy-middleware');

const APP_SECRET = process.env.APP_SECRET || '987654321';
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3000';

const verifyJWT = token => {
  return new Promise(resolve => {
    resolve(jwt.verify(token, APP_SECRET));
  });
};

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const isLoggedIn = async (req, res, next) => {
  try {
    await verifyJWT(req.cookies['id_token']);
    return res.redirect('/users');
  } catch (err) {
    next();
    return;
  }
};

const isNotLoggedIn = async (req, res, next) => {
  try {
    const res = await verifyJWT(req.cookies['id_token']);
    next();
    return;
  } catch (err) {
    return res.redirect('/');
  }
};

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(
      proxy('/signin', {
        target: 'http://ec2-18-216-160-159.us-east-2.compute.amazonaws.com',
        changeOrigin: true,
        pathRewrite: {
          '^/signin': '/signin'
        }
      })
    );

    server.use(
      proxy('/api', {
        target: 'http://ec2-18-216-160-159.us-east-2.compute.amazonaws.com',
        changeOrigin: true
      })
    );

    server.use(cookieParser());

    server.get('/', isLoggedIn, (req, res) => {
      const actualPage = '/';
      return app.render(req, res, actualPage);
    });

    server.get('/users', isNotLoggedIn, (req, res) => {
      console.log(process.env.TEST);

      const actualPage = '/users';
      return app.render(req, res, actualPage);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log(`> Ready on ${HOST}:${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
