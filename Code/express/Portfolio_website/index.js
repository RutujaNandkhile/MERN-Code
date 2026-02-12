const express = require("express");
const path = require("path");

const app = express();

// Set EJS
app.set("view engine", "ejs");

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

// 404 Page
app.use((req, res) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

// Server Start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
