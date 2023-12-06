const express = require('express');

const app = express();
const path = require('path');
const routes = require('./routes');

app.set('view engine', 'ejs'); // Notify Express to use Ejs as views engine
app.set('views', path.join(__dirname, './views')); // Specify path to Views

const UserService = require('./services/userService');
const userService = new UserService('./data/userData.json');

// Configure loading of static files
app.use(express.static(path.join(__dirname, './static')));

const PORT = 3000;

app.use('/', routes({ userService }));

app.listen(PORT, () => {
  console.log(`Server is listening to PORT:${PORT}`);
});
