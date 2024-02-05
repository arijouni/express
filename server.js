const express = require("express");
const app = express();
const port = 5000;
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use((req, res, next) => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();

  const isValid = day >= 1 && day <= 5 && hour >= 9 && hour < 17;
  if (isValid) {
    next();
  } else {
    res.status(500).send("we are out of service now, get back in letter time");
  }
});
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/Service", (req, res) => {
  res.render("ourservices");
});
app.get("/contact", (req, res) => {
  res.render("contactus");
});
app.listen(port, () => console.log("the app is running in port 5000"));
