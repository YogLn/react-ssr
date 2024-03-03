import React from 'react';
import ReactDOM from 'react-dom/server';
const express = require('express');
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom/server.js';
import App from '../App.jsx';
import store from '../store/index.js';

const server = express();

server.use(express.static('build'));

server.get('/', (req, res) => {
  // 服务器端渲染
  const AppHtmlString = ReactDOM.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${AppHtmlString}</div>
    <script src="/client/client_bundle.js"></script>
  </body>
  </html>
  `);
});

server.listen(3000, () => {
  console.log('server start on 3000');
});
