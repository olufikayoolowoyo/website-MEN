const express = require('express');

const app = express();
const path = require('path');
const routes = require('./routes');

const cookiesession = require('cookie-session');

app.set('view engine', 'ejs'); // Notify Express to use Ejs as views engine
app.set('views', path.join(__dirname, './views')); // Specify path to Views

const UserService = require('./services/userService');
const MenuService = require('./services/menuService');
//const cookieSession = require('cookie-session');
const userService = new UserService('./data/userData.json');
const menuService = new MenuService('./data/menuData.json');

// Configure loading of static files
app.use(express.static(path.join(__dirname, './static')));

// Using App wide local variable
app.locals.appName = 'MEN';

// using the response object
app.use(async (req, res, next) => {
  try {
    res.locals.pageTitle = 'MEN Website';
    res.locals.menuList = await menuService.getData();
    return next();
  } catch (error) {
    return next(error);
  }
});

const PORT = 3000;

// app.set('trust proxy', 1); // needed for production use case
// app.use(
//   cookieSession({
//     name: 'user-cookie',
//     keys: ['hjksbsdf', 'adfsjhdf'],
//   })
// );

app.use('/', routes({ userService, menuService }));

app.listen(PORT, () => {
  console.log(`Server is listening to PORT:${PORT}`);
});
