const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use('/static', express.static(path.join(__dirname, "assets")));

app.listen(3000);