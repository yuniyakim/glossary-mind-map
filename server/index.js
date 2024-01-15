const express = require('express');
const data = require('./data.json');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");;
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Access-Control-Allow-Headers');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api/mind-map', (req, res) => {
  res.json(data);
});

app.all('*', (req, res) => {
  res.send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
