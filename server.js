const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 3001));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, clientPath, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`server is LIT at: http://localhost:${app.get('port')}/`);
});

module.exports = app;
