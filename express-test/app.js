let express = require('express'),
  users = require('./users'),
  app = express();

users(app);

app.listen(5000, () => {
  console.log('Server listening at port: 5000');
});
