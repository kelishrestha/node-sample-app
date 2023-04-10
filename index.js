require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working
const connection = require('./knexfile')[process.env.NODE_ENV]
const database = require('knex')(connection);

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`listening on port: ${port}`));


// Base route
app.get('/', async (request, response) => {
  const getModel = () => database.table('users');
  const totalCount = await getModel().count();
  const usersCount = totalCount[0]['count'];
  var message = 'Server running at port 9000 with ' + usersCount + ' users'
  response.send(message);
})
