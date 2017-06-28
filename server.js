const express = require("express");
const app = express();

app.set("view engine", "jade");
app.set("views", __dirname + "/views");
app.set("view option", { layout: false });

app.use("/audio", express.static(__dirname + "/audio"));
app.use("/status", express.static(__dirname + "/src"));

app.get("/", function(req, res) {
    res.render("Musical-player");
});

app.listen({ port: 3000 });