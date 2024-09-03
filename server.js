const app = require('express')();

app.get('/', (req, res) => {
  res.send('Yoo babes');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});