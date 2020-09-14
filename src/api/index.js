const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const bodyParser = require('body-parser');
const auth = require('json-server-auth');
const db = require('./db.js')();
const routes = require('./routes/index');

const router = jsonServer.router(db, { foreignKeySuffix: '_id' });

const middlewares = jsonServer.defaults();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/api/login': '/login',
}));
app.db = router.db;
app.use(middlewares);
app.use(auth);
app.use(router);
app.listen(3000, () => {
  console.log('JSON Server is running');
});