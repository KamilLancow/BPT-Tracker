const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

//Create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bpt_tracker'
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL DB Connected...');
});

const app = express()
    .use(cors())
    .use(express.json());


app.get('/bpt_today', (req, res) => {

    let sql = 'SELECT e.day, e.hour, e.energy_level AS energy, t.activity, t.is_productive, t.procastination_time FROM energylog AS e, timelog AS t WHERE e.day = t.day AND e.hour = t.hour';
    db.query(sql, (err, result) => {
        if (err) throw err;
        else 
        res.send(result);
    });
});

app.get('/bpt_of_day/:day', (req, res) => {

    let sql = 'SELECT e.day, e.hour, e.energy_level AS energy, t.activity, t.is_productive, t.procastination_time FROM energylog AS e, timelog AS t WHERE (e.day = ? AND t.day = ? ) AND e.hour = t.hour';
    db.query(sql, [req.params.day, req.params.day], (err, result) => {
        if (err) throw err;
        else 
        res.send(result);
        console.log(req.params.day);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));