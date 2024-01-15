const express = require('express');
const app = express();
const data = require('./data.json');

const PORT = process.env.PORT || 9000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');
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
