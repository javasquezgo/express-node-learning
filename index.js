const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 5050;

const { logErrors, errorHandler } = require("./middleware/errorHandler");

app.use(express.json());
app.use(logErrors);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hi this is my server");
});

app.get("/new-route", (req, res) => {
  res.send("Hi, i´m a new route");
});

routerApi(app);

/* app.get("/users", (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("There is no params");
  }
}); */

app.listen(port, () => {
  console.log("Mi port: " + port);
});
