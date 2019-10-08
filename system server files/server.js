const express = require('express');
const bodyP = require('body-parser');
const knex = require('knex');
const cors = require('cors');


const database = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'hotboyz7777',
      database : 'datatest'
    }
  });





const app = express();


app.use(bodyP.json());
app.use(cors());


app.post('/send', (req, res, next) => {
    res.send("<h1>You sent something!</h1>");
    console.log(req.body)
})


app.get('/', (req, res) => {
    database.select('*').from('tiles').then((data) =>{
        database.select('*').from('projects').then((projects) =>{
          
          const info = [data, projects]
          console.log(info)
            res.json(info)
        })
    })
})

console.log('Welcome to the server')
app.listen(3001);