const express = require("express");
const { connect } = require("./src/utils/database");
const routerMovie = require("./src/api/routes/movie.routes");

const port = 6500;

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movie", routerMovie);

app.listen(port, () => console.log(`listening on: http://localhost:${port}`));
