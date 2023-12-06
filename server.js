const express = require("express");

const app = express();
const path = require("path");

app.set("view engine", "ejs"); // Notify Express to use Ejs as views engine
app.set("views", path.join(__dirname, "./views")); // Specify path to Views

// Configure loading of static files
app.use(express.static(path.join(__dirname, "./static")));

const PORT = 3000;

app.get("/", (req, res) => {
  res.render("pages/index", { pageTitle: " Website MEN" });
  // res.sendFile(path.join(__dirname, "./static/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening to PORT:${PORT}`);
});
