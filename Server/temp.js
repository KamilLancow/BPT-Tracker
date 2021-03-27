const express = require('express');
const mysql = require('mysql2');
//const cors = require('cors');
const models = require('./models');
// import routes from './routes';
// import models from './models';
//const events = require('./events');

const app = express()
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
//    .use('/bpt_today', routes.BPT_Today)
    .use((req, res, next) => {
        req.context = { models };
        next();
    })
//    .use(events(connection));
;

app.get('/bpt_today', (req, res) => {
  res.send(req.context.BPT_Today);
  });


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});