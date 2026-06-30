const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));
app.use(express.static(path.join(__dirname, '../public')));

const router = require('./routes/index');
app.use('/', router);

app.listen(PORT, () => {
  console.log(`🎮 Valorant Guide running at http://localhost:${PORT}`);
});
